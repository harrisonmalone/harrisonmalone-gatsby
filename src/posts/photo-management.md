Photo storage and management has long been something I care a lot about. I like good olf fashioned folder structure and naming conventions and hugely dislike a scattered and disorganized approach to managing these important memories.

Unfortunately, I've never really properly sat down and dedicated time to learning how automate my photo management process with scripts. This was until these last 2 days.

Now let's start at the beginning. Like many people with an iPhone I used iCloud Photo Library for many years but found it slow and unreliable. I know this has changed in recent years but Apple is just not good at cloud. I switched to Google Photo's and this was better; but then I hated losing quality in my photos and at this point has started to distrust Google's products. 

I also had a hard disk drive that had a bunch of older files on there. I needed to get these images off it before it fully failed. There was golden moments from family holidays on there.

I eventually adopted a simple strategy of using Airdrop on a monthly basic to send photo's to my Mac where I'd store them on a USB. I also ran this shell script on the photo's so they had some kind of naming convention:

```bash
ls | cat -n | while read n f; do mv "$f" "$n.jpg"; done
```

This worked fine and I'd have a folder structure that looked something like this:

```
├── 01
|   ├── 1.jpg
|   └── 2.jpg
├── 02
|   ├── 1.jpg
|   └── 2.jpg
```

Okay so not really the most informative thing to look at. What photos are actually in the 02 directory? This is the problem that I attempted to solve today.

Plans were drawn up. My proposal was having a folder structure like this:

```
├── 2020
|   ├── 01
|   |    ├── 1.jpg
|   |    └── 2.jpg
|   └── 02
|        ├── 1.jpg
|        └── 2.jpg
├── 2019
|   ├── 01
|   └── 02
```

This again was okay but the `1.jpg` name is the problem still. It's just not informative enough. I could script the sorting of these photos by using the `mdls` command and using Ruby to split the string returned from the command to access the metadata.

I also realized at this point that many of my photos had broken metadata. This meant that I couldn't access the data for when the photo was taken and consequently couldn't use my Ruby script correctly. The reason why the metadata was broken was because many of my images had gone in and out of Facebook land. Images get drunk in Facebook land and forget when they were born.

I should also say here that at this point I realized that the metadata attributes had something to do with the [Exif standards](https://en.wikipedia.org/wiki/Exif). These are standards for images produced digitally. I did some research about Exif and found that there were a couple of command line tools you could use to manipulate and query this Exif data. The one that I saw pop up the most was [exiftool](https://formulae.brew.sh/formula/exiftool). 

To install exiftool on MacOS run:

```
brew install exiftool
```

I took a deep dive into exiftool and found heaps of good Stack Overflow examples. Here is the workflow I ended up with starting with the photos that had valid Exif data.

```
exiftool "-Directory<DateTimeOriginal" -d "%Y/%Y-%m-%d" .
```

It's a one liner! All that work I did with my Ruby and I just needed a brew install and one line of code. What this command does is it looks at the Exif data for when the photo was taken and sorts images into this folder structure:

```
├── 2020
|   ├── 2020-04-08
|   |    ├── 1.jpg
|   |    └── 2.jpg
|   └── 2020-04-07
|        ├── 1.jpg
|        └── 2.jpg
```

You can see that images are now in a year and full date folder structure which is approaching exactly what I want. There's just one more problem which is the naming of the files.

This was solved with this Ruby script:

```rb
folders = Dir.entries(".")[2..-1]
folders.each do |folder|
  `exiftool '-FileName<DateTimeOriginal' -d %Y%m%d_%H%M%S%%-c.%%e #{folder}`
end
```

This iterates through all of my nice folders in the full date format (2020-04-08) and runs another exiftool script on the directories turning the names of the files into full YYYYmmdd_HHMMSS format. This is what it looks like now:

```
├── 2020
    ├── 2020-04-08
         ├── 20200408_090208.jpg
         └── 20200408_090413.jpg
```

Perfect! I'm very happy with the level of detail I get!

The final and rather annoying issue to solve was the photos that lacked proper Exif data. I kind of hacked a solution together which involved the following steps:

1. Ensuring the photos were at least in the correct year directory, at the root
2. Copying these photos out into another directory
3. Running this Ruby script on all the photos in the copied directory 

```rb
time = 130000
Dir.foreach('.') do |file|
  if file.include?(".jpg")
    `mv #{file} 20060101_#{time}.jpg`
  end 
  time += 1
end 
```

This script ensures that all images in the current directory have a name in the correct format which `exiftool` can then use to create new metadata attributes. I'm still unsure on a few things on this script though such as:

- Why the counter doesn't perfectly increment by 1, some of the files jump in increments of 2 or 3?
- Why 130000 is 2AM?

4. Now each image is correctly named I can run `exiftool "-AllDates<filename" *` which sets the Exif date, I'm aware that all images will be Jan the 1st but at least they're in the correct year, I might painstakingly go through these images and put them in the correct month eventually
5. Run this command `exiftool "-Directory<DateTimeOriginal" -d "%Y/%Y-%m-%d" .` to verify everything is correct, it would just put the images into the year and full data folder structure
6. Copy the `<year>-01-01` directory back to the main images directory

This is now a good spot to be in. What I'm currently doing is uploading all of these directories to an S3 bucket. This will be my main backup. I'm also thinking of [buying an SSD](https://www.jbhifi.com.au/products/samsung-t5-portable-ssd-drive-500gb) as a redundant hardware backup or using some storage that I have already; potentially on my iPad.

I'll then make a web app portal for accessing these images. It won't be anything fancy; just a basic Rails app with devise and a seed.rb file which will hit the S3 API to get all of the image keys. These keys will then be stored in a DB.