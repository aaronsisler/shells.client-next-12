# shells.client-next-12

## Updates needed

### Repo updates

Do a global find on the repo for the following: `REPLACE_ME__`. This should speed up the below process.

1. package.json - Update name
1. package.json - deploy:beta/prod scripts
1. Update title in \_app.js
1. Update the next.config.js to include the URLs for beta and domain.
1. Update the branch name in .github files to be `main` instead of `mainxy`
1. Uncomment the deploy to beta in .github/pull-request.yml
1. Update config.js with client information.
1. Add navbar
1. Add footer
1. Choose font, update the fonts.scss file, and update MAIN_FONT in variables.scss

### Github updates

1. Setup the GHA secrets for:

   - AWS_ACCESS_KEY_ID
   - AWS_SECRET_ACCESS_KEY

## Repository Conventions

### Imports

### Atomic Elements

#### Atoms

#### Components

#### Widgets

#### Containers

#### Pages

A page should contain a `main` markup element wrapping a single imported container.

## Creating S3 and CloudFront

### Creating new S3 bucket

1. Create new bucket

   - Public Access all the boxes

1. Properties tab

   - Enable Static Hosting
   - Index and Error document

     ```
     index.html
     ```

1. Permissions tab

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
               "Effect": "Allow",
               "Principal": "*",
               "Action": "s3:GetObject",
               "Resource": "arn:aws:s3:::beta.client-domain-name.com/*"
         }
      ]
   }
   ```

### Creating Cloudfront distribution

1. Make sure ACM Certificate has client-domain-name.com AND \*.client-domain-name.com
1. Origin is the URL from S3 static domain
1. Viewer -> Viewer protocol policy -> Redirect HTTP to HTTPS
1. Alternate domain name (CNAME) needs to be client-name.com
1. Custom SSL certificate needs to have the ACM Certificate that has boht base nad \*.client-domain-name.com
1. Descritpion at the bottom will have the client-domain-name.com or beta.client-domain-name.com
