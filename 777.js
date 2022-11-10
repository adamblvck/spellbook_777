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
    "air": "# The Element of Air\n\nIn this thing, a list of references and hints, partaining to the meaning of the element of Air.\n\n## High Level Meanings\n\nAir usually represents the first step of conscious action in the world, and its basic meaning is represented by the following words:\n- Ideas\n- Thinking and Thought\n- Mental aspects\n- Possibilities\n- Insights\n- Context\n\nMore philosphical meanings of Air are:\n- The process of understanding into refined \n- Available knowledge without extra learning (learning is Water)\n- Movement and the room for movement\n- Analysis of any kinds\n- Maximal description of something\n- The notion of \"nowness\", in contrast with Fire's futureness, or Water's Pastness.\n\n**Do not** try to read all the above and remember them on your first day. It's far more beneficial to scan through them when at blank when working with SpellBook, then pick what fits for your situation. Any written description of Air falls short of the process of noticing the element in action, and accessing its category consciously and intuitively.\n\n**Most usefully** would be coming up with your own language constructs for the four elements.\n\n## Symbolic Representation\n\nAir is often represented as a circle, or sphere. Other representations include whirls (like in wind whirls), galaxy-like swirly figures, and in the hermetic tradition: a crossed-through upward triangle (\ud83d\udf01).\n\nWhen symbolized by a circle or a sphere, the symbol lacks any corners and thus is allowed to roll freely, and bounce around effortlessly. Consider thus how also our ability to **think**, or to **consider between options**. Perhaps more commonly, to be able to **discern and create ideas and concepts** given room to think, is all a quality of air, or the first step.\n\nIt helps to consider that one's life is strongly determined by one's **circle of availability**. See this as the gathered ideas and concepts of the world around you, which give you a representation of \"what to do next in your life\". This circle gives you room to move around and abound safely, and thus the analysis of this space can be considered an aspect of air.\n\nRight at the boundary of this circle sits the edge of our comfort. Within the circle we have conquered domain, and it's considered to be thoroughly visited from our first steps, to our greatest efforts. Outside this circle lies our discomfort, the unknown, and adventure. Through the other elements (like Fire or Water) we can go beyond our circle of comfort, and thus grow, learn, and expand. The other three elements are thus directy linked to Air by their interconnected nature.\n\nSwirly symbolism shares many aspects of the circle representation, including that of hydrodynamic movement of physical air or water through space, by assumption that the particles are \"dots\" or \"little balls\" which are free to bounce around, and exchange energy by unaltered interaction.\n\nThe crossed-through upward triangle (\ud83d\udf01) symbol has to be interpreted in conjunction with Fire (the upward triangle). Considering that all there is \"up\" or \"down\", going \"beyond up\" is like \"considering all things that can be up\", which is the crossed upward triangle. Air is thus the space \"beyond the confines of decisions\", which is in perfect alignment with the notion of possibilities and room for movement.\n\n## Nuances when considering Air\n\nTo have ideas about something, or to attempt to understand something, usually suggests the composed thing to belong to the category of Air.\n\nThere are nuances however, to mention a few:\n- A todo-list is Air (as it gives room for possibilities), whereas the decision to execute on a single todo-item in a list is Fire.\n- When one is feeling emotional when working with ideas, concepts or options: try describing the thing as Air, then add Water as a subthing ('comment') to phrase your emotional state, further unwinding chaotic states of thought.\n- **Questions are not Air, they are Fire**, that's because questions have a tendency to \"filter one's attention into answering them\" and thus causing passion when answering them. The answer to a question (fire) can be all other categories, including fire itself. Answer fire to fire causes very interesting experiences when using SpellBook.\n- When reading a quote which inspired an idea, just state the idea as Air, then add Earth crediting the quote or person who said something. To know your sources is potentially the most vital exercise when doing inner exploration.\n- When reading or hearing an idea by someone else, and you like the idea very much as your own, you can either proceed as in the previous point, or add it as Earth (stating the quote / idea as said by XYZ, or written in ABC), then adding an Air subthing with your own twist and context to it.\n\nThe air element gets even more nuanced when considering planetary categories:\n- When the Air aspect interferes with your sense of luxury and your ability to enjoy and love life, it belongs to the category of Venus, and thus should be debugged in the green color. Either make the step towards planetary initiation (that is, using a 4x4 meaning matrix, as opposed to a 1x4 meaaning matrix), or try untangling your concept into multiple subthings.\n- When the process of understanding comes with a deep sense of impacting the future - which includes \"being correct in the future\" - it belongs to category of Mercury. Scientific inquiry, business plans, merchanize, and discernment across facts as they relate to daily life are \n\n## Esoteric Discernment\n\nIn the complete analysis of the four elements, three primary non-physical cycles are represented:\n\n- In the imaginary cycle, air represents the first step, and thus the concept of range of possibilies, and the concept of useful knowledge in context of one's immediate environment.\n- In the kernel cycle, air represents the second step, and thus the concept of acceptance and contemplation of whatever is. It's the use of the mind to inquire into what has been received, and build furhter tracks-for-thought, to go within.\n- In the real cycle, air represents the third step, and thus concept of clarity and space, after thorough acts of will and courage have been displayed.\n\nThe three cycles are held together by the four (macroscopic and non-cyclic) thermodynamic potentials, which are physical in nature:\n- **U (Internal Energy)** = Energy needed to create a system\n- **F (Helmholtz Free Energy)** = Energy needed to create a system, without the energy around the system\n- **H (Enthalpy)** = Energy needed to create a system, and to make room for it\n- **G (Gibbs Free Energy)** = Energy needed to create a system, make room for it, without any energy surrounding it\n\n## Feedback\n\nFeedback, suggestions, or questions? Send an email to [ADAM BLVCK](mailto:contact@adamblvck.com).\n",
    "earth": "# Earth\n\n",
    "water": "# Water\n\n\n\n",
    "fire": "# The Element of Fire\n\nIn this thing, a list of references and hints, partaining to the meaning of the element of Fire.\n\n## High Level Meanings\n\nFire usually represents the second step of conscious action in the world, and its basic meaning is represented by the following words:\n- Decisions\n- Passion\n- Choosing Love\n- Expansion\n- Filtering\n- Questions & Inquiry\n- Indivual Todo-Items\n- Hierarchy, Prioritization, or Ordering\n\nMore philosphical meanings of Fire are:\n- The process of saying yes to one thing, and no to other things\n- The use of willpower to gain something in the future\n- Visualization of future outcomes\n- A projection of an idea into the future: \"this idea WILL be done\"\n- The thing that makes you say \"yes\" and happy\n- A crucial single step along a line of thought or process\n- The notion of \"futureness\", as opposite to \n\n- The process of understanding into refined \n- Available knowledge without extra learning (learning is Water)\n- Movement and the room for movement\n- Analysis of any kinds\n- Maximal description of something\n- The notion of \"nowness\", in opposite to Water's Pastness.\n\n**Do not** try to read all the above and remember them on your first day. It's far more beneficial to scan through them when at blank when working with SpellBook, then pick what fits for your situation. Any written description of Air falls short of the process of noticing the element in action, and accessing its category consciously and intuitively.\n\n**Most usefully** would be coming up with your own language constructs for the four elements.\n\n## Symbolic Representation\n\nSymbolized globally across all nations and religions by an upward triangle, the symbol has three corners, with one pointing upwards.\n\nThe top corner is pointing up, which suggests expansion and the \"the going up of energy\", much like when physical fire is burning. The top corner also stands \"higher\" than the lower two corners, which forms what we understand as a hierarchy. In a hierarchy, some things are more important than others, and it's so purely by Will, or human projection.\n\nFurther, consider how focusing a light bundle onto one tiny spot, increases the amount of energy which arrives there. Same happens with consciousness and decisions. To be spread thinly, means that your energy or \"focus\" is scattered. Thus when saying YES to ONE THING, you say no to ALL OTHER THINGS. This both causes an increase of focus, more passion and power into a chosen direction, and a thus things start moving, and expanding.\n\nConsidering how much things there are in life, like potential partners, possible jobs, books to read, apps to download, content to create or consume, etc ... By cheer vastness of possiblity, one has to **choose**. But what to choose? Ah well, choose that which you Love! Thus Fire is often attributed to **Love** and **Passions**.\n\n## Nuances when considering Air\n\nTo have ideas about something, or to attempt to understand something, usually suggests the composed thing to belong to the category of Air.\n\nThere are nuances however, to mention a few:\n- When one is feeling emotional when working with ideas, concepts or options: try describing the thing as Air, then add Water as a subthing ('comment') to phrase your emotional state, further unwinding chaotic states of thought.\n- **Questions are not Air, they are Fire**, that's because questions have a tendency to \"filter one's attention into answering them\" and thus causing passion when answering them. The answer to a question (fire) can be all other categories, including fire itself. Answer fire to fire causes very interesting experiences when using SpellBook.\n- When reading a quote which inspired an idea, just state the idea as Air, then add Earth crediting the quote or person who said something. To know your sources is potentially the most vital exercise when doing inner exploration.\n- When reading or hearing an idea by someone else, and you like the idea very much as your own, you can either proceed as in the previous point, or add it as Earth (stating the quote / idea as said by XYZ, or written in ABC), then adding an Air subthing with your own twist and context to it.\n\nThe air element gets even more nuanced when considering planetary categories:\n- When the Air aspect interferes with your sense of luxury and your ability to enjoy and love life, it belongs to the category of Venus, and thus should be debugged in the green color. Either make the step towards planetary initiation (that is, using a 4x4 meaning matrix, as opposed to a 1x4 meaaning matrix), or try untangling your concept into multiple subthings.\n- When the process of understanding comes with a deep sense of impacting the future - which includes \"being correct in the future\" - it belongs to category of Mercury. Scientific inquiry, business plans, merchanize, and discernment across facts as they relate to daily life are \n\n## Esoteric Discernment\n\nIn the complete analysis of the four elements, three primary non-physical cycles are represented:\n\n- In the imaginary cycle, air represents the first step, and thus the concept of range of possibilies, and the concept of useful knowledge in context of one's immediate environment.\n- In the kernel cycle, air represents the second step, and thus the concept of acceptance and contemplation of whatever is. It's the use of the mind to inquire into what has been received, and build furhter tracks-for-thought, to go within.\n- In the real cycle, air represents the third step, and thus concept of clarity and space, after thorough acts of will and courage have been displayed.\n\nThe three cycles are held together by the four (macroscopic and non-cyclic) thermodynamic potentials, which are physical in nature:\n- **U (Internal Energy)** = Energy needed to create a system\n- **F (Helmholtz Free Energy)** = Energy needed to create a system, without the energy around the system\n- **H (Enthalpy)** = Energy needed to create a system, and to make room for it\n- **G (Gibbs Free Energy)** = Energy needed to create a system, make room for it, without any energy surrounding it\n\n## Feedback\n\nFeedback, suggestions, or questions? Send an email to [ADAM BLVCK](mailto:contact@adamblvck.com).\n",
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