---
title: "Photo App"
date: "2020-08-07T02:48:32.451Z"
---

[harrisonsimages](https://harrisonsimages.netlify.app) is an app I built during the break period between cohorts whilst working at [Coder Academy](https://coderacademy.edu.au/).

It uses a React client with the following libraries:

1. create-react-app to initialize a new app and setup the development environment
2. react-lazy-load-image-component for lazy loading of images
3. scroll-to-element for keyboard shortcuts to jump between different months

It uses a Rails backend with the following libraries:

1. aws-sdk-s3 for uploading direct to s3 via active storage
2. fog-aws for uploading public images to a general bucket
3. zip_tricks for accessing all images for a given year putting them into a zip and downloading that zip

Some of the features I'm really proud of this app include:

1. A blazing fast image UI, custom loading of images with active storage variants to ensure that everything feels snappy
2. Two buckets of images, one bucket for your classic photo library and a shared images directory for things like screenshots and blog post images
3. Keyboard shortcuts (arrow keys) to ensure that navigation around the app isn't just reliant on a mouse
4. Uploading information that tells the user the status of how many images have been uploaded, it also ensures that images have been sorted and cached before allowing the user to redirect back to the image home page
5. A settings page that allows users to download images from the S3 bucket of a given year
6. Client side form validation to ensure that images are uploaded with a specific naming convention
7. Edit and delete functionality of specific images to ensure that I can easily edit images with incorrect dates or delete images I have no need for

I'm going to use this app to store all of my photos over the years. I'll also continue to take photos on my iPhone.

When I want to upload new images I'll follow these steps:

1. Airdrop my images from my iPhone to the Mac
2. Run [Renamer](https://renamer.com/) on the images to extract Exif data and use the correct naming conventions for images
3. Upload all the images via `/upload`