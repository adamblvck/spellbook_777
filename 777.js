export default {
    "app": {
        "changelog": {
            "update_1_4_0": "## 1.4.0 Major UX Update (3 Nov 2022)\n\nSpellBook is currently pivoting towards an open source model, allowing you to personally inspect and contribute to the project. The open sourcing pivot will allow you to experience truly private and fully encrypted **auto backups** your data to cloud platforms. Though this update contains code base allowing for such capabilities, creation of wallets, and syncing with cloud providers, *they have not been enabled yet* to ensure compliance with App Store & Google Play Store requirements, until of course the app will go public. This will enabled as soon as the pivot to open source has happened in November.\n\nIn the meantime, many suggested bugs and issues have been addressed and fixed:\n\n- Added \"Data Management\" to Settings, which allows you to:\n  - Perform offline backups of your data\n  - Scan your cache folder and save on space\n  - Idenfity unused images, missing images, and quickly delete them to save on space\n  - Compress large images to smaller versions - both to save on space, and to downsize your backup size.\n  - Delete cached files which take up your space\n  - Moved purge buttons far away from \"import and export\" buttons\n  - Later on it's here where you'll be setting your automatic and encrypted backups to cloud services\n\n- UX Improvements:\n  - Images:\n    - Images can now be shared or saved to gallery.\n    - An 'infinite' amount of images can now be added to things and their subthings. When editting or adding images, they're not overwritten, but added.\n    - Images can now be ordered and sorted in things and subthings. Missing images will be indicated as such.\n    - Image picker ensures that chosen filenames are compressed and downsizes, which helps with the performance in the app and your storage usage.\n  - App:\n    - App and things load quicker, scroll performance improved significanetly in feeds.\n    - Fixed weird scrolling behavior on android when things got too long, especially noticable when editting things.\n    - SpellBook now has tons of mini-animation to make the experience smooth and cozy\n  - Content Management:\n    - Added Markdown support! text fields now supports markdown syntax. Use single stars * to put things into *italics*, or double stars ** to make things **fat**. Markdown links, images, tables, and code fences are also supported.\n    - Added accessible *edit* buttons things and subthings\n    - When editting subthings very deeply (like sub-sub-sub-sub-sub-sub-subthings), the available content entry space now expands to ensure at least 80% screen coverage screen, to ensure gracious input into SpellBook.\n    - Fixed navigational issues\n  \n\n\n\n",
            "update_1_3_0": "## 1.3.0 Planets and Stability (12 Aug 2022)\n\nOver the past few months SpellBook has received many requests. Some of these requests have been fixed and implemented today, while others require more assessment to ensure a top-notch data privacy guarantee. Below a list of all changes in this release, which is meant to fix *most* reported bugs out there!\n\n- Added `planets`, which acts as an extra category for your things. To enable planets, go to `settings > planets > enable`. Planets can be accessed/added both in things and in subthings.\n- Redesigned MR-code preview screen, aiming to add AI-capabilities soon!\n- Custom font sizes, now available in the settings page!\n- Added a contextual 777 reference library, unlocking in December for everyone!\n- The 777 library contains both a tree-of-life and a 4x4 matrix analysis of the elements, and their combinations.\n- Fixed navigation issues, save issues, weird crashes (especially on Android)\n- Updated to latest SDK for more smoothness and security\n",
            "update_1_1_3": "## 1.1.3 Data import fixes & infinute loops (4 May 2022)\n\n- Data imports didn't work on some androids built, should now be fixed\n- Prevented an astronomical calculation from entering infinute loops, and crashing the app\n",
            "update_1_1_0": "## 1.1.0 Subthing Deletion, MR-Codes and Performance Update (23 Feb 2022)\nThis update features tons of small little UX and data hiccups which will make SpellBook an app you can trust. Two months in development, this update includes:\n- Overall app performance increase (all things data and privacy)!\n- You can now delete subtings from things (this prunes all subthings below it too).\n- You can change the element from subthings.\n- Added loading indicators when data is loading or processing.\n- Improved readability of 'light' mode.\n- Added MR-code 'explanation' section (beneath each sigil).\n- Added foreign alphabets to MR-code.\n- Fixed deletion errors on things and groups (bugs).\n- Fixed weird MR-code rotation (bug).\n- Fixed images not correctly resizing.\n",
            "update_1_0_5": "## 1.0.5d Psst... Notifications! (8 Nov 2021)\n- Adding low-key notification update! May the programming begin.\n- You can now schedule notifications for things. Remind yourself of most important ideas.\n- Lifting half-time decay of charges, from 7 days, to 28 days.\n\n## 1.0.5c ... (5 Nov 2021)\n- Charges below 1 receive +1, charges above 1 double!\n- Updated of settings layout & fixed background annoyances\n\n## 1.0.5b Pic update & code stabilization! (20 Oct 2021)\n- Early test of \"Planetary Resonance\" (testing new feed mode!), based on inner reflections of planetary resonances\n- Fixed: prompts (compose) spam-changing when typing\n\n# 1.0.5 Pic update & code stabilization! (20 Oct 2021)\n- Updated assets (like logo)\n- Stabilized and updated SDK, ensuring compatibility with most devices out there\n- Prepping app source code for big features ahead\n",
            "update_1_0_4": "## 1.0.4d Added prompts! (24 Sep 2021)\n- Prompts in the compose screen now change and are different for each element!\n\n## 1.0.4c Minor Bug Fixes (3 Sep 2021)\n- Fixed crash when trying to select images from your own library!\n\n## 1.0.4b Story Major Update (31 Aug 2021)\n\n- Stories have been added! Review your charged items quickly and efficiently!\n- Improved feed algorithm, showing relevant things, based on element.\n- Charging mechanism reworked! Add attention to your things by hitting the lightning button.\n- Charges now decay over time. -50% / 7 days. One charge per item, per calendar date.\n- Reworked information section, now includes guidance on practical usage.\n- Reworked UI elements to make both themes look better.\n- Reworked collection\u2019s Element Plot engine to follow moon position on the sky at creation date.\n",
            "update_1_1_1": "## 1.1.1 Inline Subthing Editing (2 Mar 2022)\n\nEnjoy increased productivity with inline subthing adding and editing (previously one was directed to another screen)\n"
        },
        "how_to_use": "# How to use?\n\nSpellBook works best when used as an interactive journal, an idea incubator, or longterm brainstorm-list. So next time when presented with the urge to open Social Media, try opening SpellBook! Go through your ideas, add a few new ones, and make sure to add 'completed' ideas as Earth!\n\n## \ud83d\udf01\ud83d\udf02 The Four Feeds \ud83d\udf04\ud83d\udf03\n\nAs you've learned, things are categorized into one of the four elements. Each tab gives you one of the four possible looks at your SpellBook. The story section is not affected by the tab theme.\n\nYou can adjust the chosen words for each tab in the settings. They serve as a reminder as to what each feed shows.\n\nThe key is to learn to categorize all experience into the same overarching structure. In SpellBook we encourage using four categories. There's a reason for this, but out of scope to explain right here.\n\n- \ud83d\udf01 Do you want to review ideas or get a sense of 'space', open the air tab.\n- \ud83d\udf02 Do you feel you need more passion or review decisions, open the fire tab.\n- \ud83d\udf04 Is there something you're going through, review the water tab. Maybe some of those things will help you!\n- \ud83d\udf03 Do you want to feel calm, review what you've done, or reference delivered work, check out the Earth tab.\n\n## \u26a1\ufe0f The Lightning Button\n\nThe lightning strike button acts like a 'like' button and it charges your thing or element.\n\nStriking the lightning tells SpellBook 'I want to put more attention on this'. When you see an idea that you like, THEN CHARGE IT! It will make the thing appear more often in your feeds, and thus increasing your attention on what's important. Things that have 1 or moore charges are turned into stories for quick review and iteration.\n\nYou can charge things one time per day, adding one '+1' charge. The total charge of each thing decays (goes down) by 50% each 7 days. A thing with 2.0 charges will have 1.0 charge next week, 0.5 one week later, and 0.25 two weeks later, until it hits zero one day Charges decay to simulate natural decay of radiant material. So keep hot ideas hot, and leave non-exciting ideas behind.\n\n## \ud83d\udd25  Stories\n\nCharged things are turned into stories, for quick access and deeper introspection, perhaps even making you jump into action.\n\nGo through your stories daliy, and honestly analyse if you want to further pursue some action, or actively work on it in real life.\n\nStories also allow you to stay updated on your MOST IMPORTANT ideas. Keep on charging ideas which you Love.\n\n## \ud83d\udd06 More tips on using the elements?\n\nThe four elements are \"ways of looking at the world\".\nIt may look tough sometime to guess into which category to put a created 'thing'. It's therefore easier to analyse your intention-context:\n\n- DataAre you being airy or have a vague idea (air)?\n- Are you passionate and committed (fire)?\n- Do you try to move forward but something is blocking you (water)?\n- Did you read something someone wrote (earth)?\n- Did you finished something as part of the journey (earth)?\n\nAll the above suggests to monitor where you intentions lie.\nAm I describing an idea? Am I making a decision? Am I expressing a difficult passage? Am I finalizing a statement?\n\t\t\t\t\nRemember that you can learn to 'put on' lenses whenever you need it.\n- \ud83d\udf01 Need to feel free?{'\\n'}Look at the world airy!\n- \ud83d\udf02 Need more commitment?{'\\n'}Look at the world with Love!\n- \ud83d\udf04 Need to feel understood?{'\\n'}Allow the water to pour down!\n- \ud83d\udf03 Need to feel stable?{'\\n'}Consider it all been done.\n\n## \ud83c\udf6a Use Collections!\n\nWhenever you're starting a new project, start a new collection!\n\nSay you're into \"Passive income\", but you're still trying out different ideas, thus create a collection \"Passive Income\", and add all new content to that collection! Using collections helps you order your mind space into seperate \"attention points\". These are the 'working themes' of your current journey.\n\n## \u221e   Symbols & Meaning\n\nSymbols are light on a screen, to which many things can be attributed to. The M in McDo shops has more meaning to us than just 'hamburgers and fries'. The four elements are thus only four words with a particular profound meaning. SpellBook uses a PRACTICAL application to these, but it's important to stay playful. Create your own versions across the four elements, and see where they will bring you!\n\t\t\t\t\n## \u2705 Avatars? Sigils? QR/MR Codes? New Age?\n\nTo make your ideas appealing and unique, we created a visual hash algorithm, based on ancient sigil making techniques. The algorithm takes the title of your thing, and follows a path through letters which are mounted on a circle. The path through the letters is colored in the chosen element of the concept. It's believed that similarly spelled titles will look more familiar. This then encourages a deeper interaction with your ideas. It also acts like a visual anchor point, bringing created things onto a deeper layer of cognition. There's a case for this being a gimmick, but then again, anything analyses deeply enough removes the journey through it.\n\n## \ud83d\udc40 Feed Modes\n\nEach presented feed has a small dropdown button, allowing you to select a feed mode. Feed modes configure the algorithm responsible for showing us our own content back to us. Some feed modes will be based on charges, others on randomness. Some on modified date, and others on activity level.\n\nFeed mode also allows you to filter things based on time. This way you can stay focused on say... only the ideas that have been active for the last 88 days (one mercury cycle).\n\n## \ud83e\udd89 General Philosophy\nIn SpellBook you get to spell out the THINGS that are on your mind. These can be ideas, problems, solutions, or results. Or maybe combinations thereof (that's a the secret!).\n\nMany people have many perspectives in this world, so each perspective should be described by a common classification habit, allowing for common communication, at an intuition level.\n\nIf this all may seem too much, remember this: SpellBook is a river for ideas. Scroll through your content, engage with what you like, add charges to ideas that are of particular importance, and discard the rest!\n",
        "intro": ""
    },
    "air": "# Air\n\n# h1 Heading 8-)\n\n**This is some bold text!**\n\n## Header 2 for some smaller information\n\n*This is some italic text!*\n\n### Header 3 for some smaller headers\n\n~~Crossed text~~\n\n---\n\nThis is normal text\n\n| Tables   |      Are      |  Cool |\n|----------|:-------------:|------:|\n| col 1 is |  left-aligned | $1600 |\n| col 2 is |    centered   |   $12 |\n| col 3 is | right-aligned |    $1 |\n\nI think it's pretty cool that some parts can be made **FAT** or *italic*.\n- a\n- b\n- c\n- d\n\nSo when taking a simple class like \\`Testing basic data\\`, you actually pick up the actual part which shows what is required in the game of the world.\n\nSome explanation towards the most important and basic things in the world!\n\n```\nconst webModal = {\n\tpresentation: 'transparentModal',\n\theaderShown: false,\n\tcardOverlayEnabled: true\n};\n```\n\nAdding a link to [the game of life](https://www.youtube.com/watch?v=EU5qEW-9MZk).\n\n1. test A\n2. test B\n3. test C\n4. test D\n\nAnd this is a [[BLOCKLINK]].\n\n> Here I'm quoting the most important part of society!\n\nabc",
    "earth": "# Earth\n\n",
    "water": "# Water\n\n\n\n",
    "fire": "# Fire\n\n",
    "inf": "",
    "saturn": "",
    "dot": "",
    "moon": "",
    "sun": "",
    "mars": "",
    "venus": "",
    "jupiter": "",
    "mercury": ""
}