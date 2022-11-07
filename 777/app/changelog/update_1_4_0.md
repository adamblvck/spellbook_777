## 1.4.0 Major UX Update (3 Nov 2022)

SpellBook is currently pivoting towards an open source model, allowing you to personally inspect and contribute to the project. The open sourcing pivot will allow you to experience truly private and fully encrypted **auto backups** your data to cloud platforms. Though this update contains code base allowing for such capabilities, creation of wallets, and syncing with cloud providers, *they have not been enabled yet* to ensure compliance with App Store & Google Play Store requirements, until of course the app will go public. This will enabled as soon as the pivot to open source has happened in November.

In the meantime, many suggested bugs and issues have been addressed and fixed:

- Added "Data Management" to Settings, which allows you to:
  - Perform offline backups of your data
  - Scan your cache folder and save on space
  - Idenfity unused images, missing images, and quickly delete them to save on space
  - Compress large images to smaller versions - both to save on space, and to downsize your backup size.
  - Delete cached files which take up your space
  - Moved purge buttons far away from "import and export" buttons
  - Later on it's here where you'll be setting your automatic and encrypted backups to cloud services

- UX Improvements:
  - Images:
    - Images can now be shared or saved to gallery.
    - An 'infinite' amount of images can now be added to things and their subthings. When editting or adding images, they're not overwritten, but added.
    - Images can now be ordered and sorted in things and subthings. Missing images will be indicated as such.
    - Image picker ensures that chosen filenames are compressed and downsizes, which helps with the performance in the app and your storage usage.
  - App:
    - App and things load quicker, scroll performance improved significanetly in feeds.
    - Fixed weird scrolling behavior on android when things got too long, especially noticable when editting things.
    - SpellBook now has tons of mini-animation to make the experience smooth and cozy
  - Content Management:
    - Added Markdown support! text fields now supports markdown syntax. Use single stars * to put things into *italics*, or double stars ** to make things **fat**. Markdown links, images, tables, and code fences are also supported.
    - Added accessible *edit* buttons things and subthings
    - When editting subthings very deeply (like sub-sub-sub-sub-sub-sub-subthings), the available content entry space now expands to ensure at least 80% screen coverage screen, to ensure gracious input into SpellBook.
    - Fixed navigational issues
  



