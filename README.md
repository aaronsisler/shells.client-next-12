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

### Imports and Exports

All imports and exports should be named and not defaulted.

### Elements

- Atoms
  - An atom should be just a simple React component that just takes props, such as an image, input, or hyperlink
- Components
- Widgets
- Containers
- Pages
  - A page should contain a `main` markup element wrapping a single imported container.

## Creating S3, ACM, CloudFront, and Route 53

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

   - Bucket Policy

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

### Create ACM Certificate

1. Make sure ACM Certificate has:
   - client-domain-name.com
   - \*.client-domain-name.com
1. Request the DNS based validation
1. This will need to be Verified (not Pending validation) before Cloudfront can be completed

### Creating Cloudfront distribution

**This is dependent on the above ACM Certificate step.**

1. Origin is the URL from S3 static domain
   - S3 -> Properties -> Static Website Hosting -> Copy that URL
1. Viewer -> Viewer protocol policy -> Redirect HTTP to HTTPS
1. Settings
   - Price Class
     - Use only North America and Europe
   - Alternate domain name (CNAME)
     - Needs to be client-name.com or beta.client-name.com
   - Custom SSL certificate
     - Needs to have the ACM Certificate that has both base and \*.client-domain-name.com
   - Description
     - At the bottom.
     - Will have the client-domain-name.com or beta.client-domain-name.com

### Create Route 53 records

**This is dependent on the above CloudFront distribution step.**

1. Add in a record for beta.client-domain-name.com
   - Add `beta` in the Record name field
   - Click the `Alias` toggle
   - Route traffic to `Alias to CloudFront distribution`
   - Select the correct CloudFront distribution
1. Add in a record for client-domain-name.com
