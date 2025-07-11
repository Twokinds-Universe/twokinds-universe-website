let lastPage = 1261;

// async function fetchTotalPages() {
    
//     try {
//         const response = await fetch('https://api.tkuniverse.space/');
//         const data = await response.json();
//         lastPage = Number(data.lastPage);
//     } catch (error) {
//         console.error('Error fetching total pages:', error);
//         lastPage = 1261;
//     }
// }
async function initialize() {
    await fetchTotalPages();

    const chapters = [
        { 
            title: "Prologue", 
            description: "Our hero awakens!",
            start: 1, 
            end: 5 
        },
        { 
            title: "Chapter 1", 
            description: `The human Trace and keidran Flora spend the <a href="https://tkuniverse.space/index.html?p=12">first night</a> together. Flora’s ex, Sythe, makes his <a href="https://tkuniverse.space/index.html?p=16">first appearance!</a>`,
            start: 6, 
            end: 20 
        },
        { 
            title: "Chapter 2", 
            description: `Our duo reach their first village and encounter a new ally: the basitin outcast, <a href="https://tkuniverse.space/index.html?p=24">Keith</a>. Trace also encounters several people from his past for the first time: the tavern sisters, <a href="https://tkuniverse.space/index.html?p=22">Maren and Karen</a>, and Trace’s old friend <a href="https://tkuniverse.space/index.html?p=23">[database error]</a>. A <a href="https://tkuniverse.space/index.html?p=27">goal</a> is set: find a ship and sail to the Basitin Isles. But <a href="https://tkuniverse.space/index.html?p=31">trust is hard</a> when it’s between three very different species.`,
            start: 21, 
            end: 47
        },
        { 
            title: "Chapter 3", 
            description: `Leaving Keith behind, Trace and Flora make a stop in a <a href="https://tkuniverse.space/index.html?p=51">new city</a>, larger than the last, looking for aid and supplies. But Trace’s past friends have <a href="https://tkuniverse.space/index.html?p=54">followed</a> him here, intent to bring him back and restore his memories!`,
            start: 48, 
            end: 73
        },
        { 
            title: "Chapter 4", 
            description: `The party <a href="https://tkuniverse.space/index.html?p=80">reunites with Keith</a>, on the promise that he won’t antagonize Flora. As they leave, Flora runs into <a href="https://tkuniverse.space/index.html?p=84">Euchre</a>, a friend from her time as a slave. <a href="https://tkuniverse.space/index.html?p=90">Things go wrong</a> as they try to free him. Trace <a href="https://tkuniverse.space/index.html?p=94">loses control</a> for the first time.`,
            start: 74, 
            end: 103
        },
        { 
            title: "Chapter 5", 
            description: `Flora and Trace <a href="https://tkuniverse.space/index.html?p=108">make up</a>, and <a href="https://tkuniverse.space/index.html?p=110">romantic feelings</a> begin to blossom. Euchre and the team part ways. They almost immediately become <a href="https://tkuniverse.space/index.html?p=122">lost</a>, while Euchre is <a href="https://tkuniverse.space/index.html?p=129">hinted</a> to not be quite so benign. The concept of <a href="https://tkuniverse.space/index.html?p=127">feral keidran</a> and <a href="https://tkuniverse.space/index.html?p=132">estrus</a> are brought up for the first time. More of <a href="https://tkuniverse.space/index.html?p=141">Keith’s past</a> is revealed, as well as his animosity towards keidran.`,
            start: 104, 
            end: 142
        },
        { 
            title: "Chapter 6, Part 1", 
            description: `The party believe they’ve reached a <a href="https://tkuniverse.space/index.html?p=145">port city</a>, but something is off. <a href="https://tkuniverse.space/index.html?p=150">Saria</a>, Trace’s past wife, makes her first appearance. Flora experiences feelings of <a href="https://tkuniverse.space/index.html?p=158">jealousy</a> and self-loathing, which make her <a href="https://tkuniverse.space/index.html?p=161">vulnerable to Ephemeral</a>, a mask-like spirit.`,
            start: 143, 
            end: 161
        },
        { 
            title: "Chapter 6, Part 2", 
            description: `Flora becomes <a href="https://tkuniverse.space/index.html?p=163">possessed</a> by Ephemeral, who uses her body to <a href="https://tkuniverse.space/index.html?p=168">fight</a> the party. Trace begins to <a href="https://tkuniverse.space/index.html?p=176">lose control</a> a second time, but <a href="https://tkuniverse.space/index.html?p=178">Euchre intervenes</a>. Trace connects with Flora mentally, which weakens Ephemeral’s hold enough to be <a href="https://tkuniverse.space/index.html?p=185">broken</a>. It is revealed that the port city was a huge <a href="https://tkuniverse.space/index.html?p=190">illusionary trap</a> set up by the mask, and <a href="https://tkuniverse.space/index.html?p=192">Saria says goodbye</a>.`,
            start: 162, 
            end: 195
        },
        { 
            title: "Chapter 7", 
            description: `The team travel south near the wolf border to reach the real port city, Wreathwood. Trace and Flora spend their <a href="https://tkuniverse.space/index.html?p=202">first night together</a>, and the masks <a href="https://tkuniverse.space/index.html?p=206">meddle</a>, as they do. Wolf assassins <a href="https://tkuniverse.space/index.html?p=211">attack</a>! Trace mistakenly uses <a href="https://tkuniverse.space/index.html?p=223">black magic</a> for the first time and summons a demon, which ends the fight. The dragoness, <a href="https://tkuniverse.space/index.html?p=229">Lady Nora</a>, makes her first appearance, much to everyone’s shock.`,
            start: 196, 
            end: 246
        },
        { 
            title: "Chapter 8", 
            description: `Wolf assassin Natani <a href="https://tkuniverse.space/index.html?p=225">joins the party</a>! The four reach <a href="https://tkuniverse.space/index.html?p=258">Wreathwood</a> in time for a festival. Resident perv, <a href="https://tkuniverse.space/index.html?p=263">Eric</a>, provides the party with a <a href="https://tkuniverse.space/index.html?p=267">ship</a>. <a href="https://tkuniverse.space/index.html?p=274">Kathrin</a> shows up! And things are revealed about Natani. <a href="https://tkuniverse.space/index.html?p=280">Two things</a>.`,
            start: 247, 
            end: 285
        },
        { 
            title: "Chapter 9", 
            description: `Eric’s brother <a href="https://tkuniverse.space/index.html?p=288">Roderick</a> is a prick. Natani’s first <a href="https://tkuniverse.space/index.html?p=300">flashback</a>. The party <a href="https://tkuniverse.space/index.html?p=306">de-ports</a>! Flora <a href="https://tkuniverse.space/index.html?p=308">poses</a> for a painting, while Keith and Natani <a href="https://tkuniverse.space/index.html?p=313">spar</a>. During the voyage, Natani has… <a href="https://tkuniverse.space/index.html?p=327">gender-related troubles</a>, but Keith helps. Not like that.`,
            start: 286, 
            end: 346
        },
        { 
            title: "Chapter 10", 
            description: `Basitin Island <a href="https://tkuniverse.space/index.html?p=347">spotted</a>! Look at all the <a href="https://tkuniverse.space/index.html?p=357">Keiths</a>! The <a href="https://tkuniverse.space/index.html?p=206">generals</a> show up, including an old friend of Keith’s, Alaric. Mike is <a href="https://tkuniverse.space/index.html?p=361">pranked</a> by Nora. Keith reveals his <a href="https://tkuniverse.space/index.html?p=378">family past</a>. Trace’s past with <a href="https://tkuniverse.space/index.html?p=404">Saria</a> is also shown by Nora. But uh-oh, <a href="https://tkuniverse.space/index.html?p=400">Templar</a> are here too! Keith is ordered to <a href="https://tkuniverse.space/index.html?p=412">kill Natani</a>, believed (correctly) to be a wolf spy. Laura! Keith and Laura have an <a href="https://tkuniverse.space/index.html?p=415">awkward</a>, then teary reunion.`,
            start: 347, 
            end: 443
        },
        { 
            title: "Chapter 11", 
            description: `Trace is captured. Keith stalls his orders by asking about Natani’s past, and the <a href="https://tkuniverse.space/index.html?p=447">mental link</a> is explained. Keith <a href="https://tkuniverse.space/index.html?p=457">tries to kill</a> Natani. Then… <a href="https://tkuniverse.space/index.html?p=465">kiss</a>? Tavern’s on fire, so they get out and formulate a <a href="https://tkuniverse.space/index.html?p=473">plan</a> to get Trace back. <a href="https://tkuniverse.space/index.html?p=478">Keith fights Alaric</a>, which ends badly. <a href="https://tkuniverse.space/index.html?p=506">King Adelaide</a>! General Alabaster <a href="https://tkuniverse.space/index.html?p=508">screws everything up</a>. Laura gives them the <a href="https://tkuniverse.space/index.html?p=517">chance</a> to destroy the tower.`,
            start: 444, 
            end: 529
        },
        { 
            title: "Chapter 12", 
            description: `Quickly, <a href="https://tkuniverse.space/index.html?p=531">Team B</a>! They’re forced to <a href="https://tkuniverse.space/index.html?p=534">flee from wolves</a>. Aftermath of battle. Keith goes on <a href="https://tkuniverse.space/index.html?p=556">trial</a>. His <a href="https://tkuniverse.space/index.html?p=560">true family past</a> is laid out. Keith’s friends risk execution, but, with the help of <a href="https://tkuniverse.space/index.html?p=577">Lynn and King Adelaide</a>, Keith is made general. All according to <a href="https://tkuniverse.space/index.html?p=583">Alaric’s plan</a>. Trace learns the <a href="https://tkuniverse.space/index.html?p=551">consequences</a> of using black magic. Laura says her <a href="https://tkuniverse.space/index.html?p=594">farewell</a>.`,
            start: 530, 
            end: 595
        },
        { 
            title: "Chapter 13", 
            description: `Team B make plans to travel to <a href="https://tkuniverse.space/index.html?p=601">Lyn’knoll</a>, the free city. Everyone on Team A regroup and set sail, following the <a href="https://tkuniverse.space/index.html?p=609">funeral</a>. A <a href="https://tkuniverse.space/index.html?p=613">stowaway</a> is on board.`,
            start: 596, 
            end: 613
        },
        { 
            title: "Chapter 14", 
            description: `Trouble starts between the slaves, wanting <a href="https://tkuniverse.space/index.html?p=617">freedom</a>. <a href="https://tkuniverse.space/index.html?p=637">Fire</a> breaks out on the ship, and Natani loses his favorite <a href="https://tkuniverse.space/index.html?p=644">robe</a>. Kathrin shows her <a href="https://tkuniverse.space/index.html?p=653">true feelings</a> to Eric, and the stowaway (and true cause of the fire) is <a href="https://tkuniverse.space/index.html?p=655">revealed</a>.`,
            start: 614, 
            end: 660
        },
        { 
            title: "Chapter 15", 
            description: `Keith experiences <a href="https://tkuniverse.space/index.html?p=662">depression</a> following his loss. Another stowaway, <a href="https://tkuniverse.space/index.html?p=663">Lynn</a>, shows up. Meanwhile, on <a href="https://tkuniverse.space/index.html?p=674">Team B</a>, Zen prepares to capture Sythe. Raine’s <a href="https://tkuniverse.space/index.html?p=679">hidden secret</a> ends up being <a href="https://tkuniverse.space/index.html?p=684">revealed</a> during the fight, but Zen is fended off. Natani creates an <a href="https://tkuniverse.space/index.html?p=713">illusion of Laura</a> at Keith’s request, to say goodbye, but can’t let her go, despite the spell feeding off his life.`,
            start: 661, 
            end: 716
        },
        { 
            title: "Chapter 16", 
            description: `A now much <a href="https://tkuniverse.space/index.html?p=718">furrier</a> Raine explains to Team B about her past and father, <a href="https://tkuniverse.space/index.html?p=722">Euchre</a>. The red-haired guy is racist. Natani goes to Kathrin for <a href="https://tkuniverse.space/index.html?p=732">clothing help</a>, and while together they have some <a href="https://tkuniverse.space/index.html?p=742">‘girl talk’</a>. Flora’s <a href="https://tkuniverse.space/index.html?p=737">pregnancy</a> is revealed to Trace. A <a href="https://tkuniverse.space/index.html?p=751">huge fight</a> breaks out, but the Laura illusion finally convinces Keith to say <a href="https://tkuniverse.space/index.html?p=760">goodbye</a> and move on.`,
            start: 717, 
            end: 764
        },
        { 
            title: "10th Anniversary Chapter", 
            description: `Ten years of Twokinds! The main four reminisce about the time they’ve shared together.`,
            start: 765, 
            end: 779
        },
        { 
            title: "Chapter 17", 
            description: `On Team B, Maren and Karen are <a href="https://tkuniverse.space/index.html?p=781">out cold</a> due to Zen’s poison. Stuck, Raine and Red <a href="https://tkuniverse.space/index.html?p=785">talk</a> about what it’s like to be a wolf. Zen strikes again, but is <a href="https://tkuniverse.space/index.html?p=794">struck out</a>! On Team A, Natani <a href="https://tkuniverse.space/index.html?p=797">helps</a> Keith, and feelings finally start to be <a href="https://tkuniverse.space/index.html?p=807">admitted</a>. <a href="https://tkuniverse.space/index.html?p=809">Kiss!</a> Team B argue what to do with Zen. Maren and Karen <a href="https://tkuniverse.space/index.html?p=840">wake</a> and meet the new Raine. They agree to use the <a href="https://tkuniverse.space/index.html?p=843">magic-nullifying collar</a>, but to <a href="https://tkuniverse.space/index.html?p=847">disastrous results</a>.`,
            start: 780, 
            end: 847
        },
        { 
            title: "Chapter 18", 
            description: `Team A finally reach <a href="https://tkuniverse.space/index.html?p=852">land</a> at Flora’s old home village. Keith is determined to heal Natani. <a href="https://tkuniverse.space/index.html?p=557">War</a> with wolves is escalating. Flora reunites with her old ‘brother’ <a href="https://tkuniverse.space/index.html?p=858">Kei</a>. They agree to meet at <a href="https://tkuniverse.space/index.html?p=861">Riftwall tavern</a>, where <a href="https://tkuniverse.space/index.html?p=862">Adira</a> and <a href="https://tkuniverse.space/index.html?p=865">Maeve</a> make first appearances! A <a href="https://tkuniverse.space/index.html?p=867">tiger meeting</a> is taking place. Keith and Co. fight mercenaries looking for wolves, led by <a href="https://tkuniverse.space/index.html?p=879">Saraphina</a>. Fight ends via <a href="https://tkuniverse.space/index.html?p=896">Dragon Princess</a>. Tiger meet begins… <a href="https://tkuniverse.space/index.html?p=910">it’s a trap</a>! Meanwhile, Natani battles her <a href="https://tkuniverse.space/index.html?p=914">inner demons</a>.`,
            start: 848, 
            end: 945
        },
        { 
            title: "Chapter 19", 
            description: `Team B continues <a href="https://tkuniverse.space/index.html?p=948">traveling west</a> towards Lyn’knoll & Edinmire. They rest for the night at a <a href="https://tkuniverse.space/index.html?p=949">hotspring</a>. Trace and co are being <a href="https://tkuniverse.space/index.html?p=954">escorted</a> to the <a href="https://tkuniverse.space/index.html?p=956">Legacy Manor</a>. They meet Princess Reni once again and she <a href="https://tkuniverse.space/index.html?p=958">reads his mind</a>. An older <a href="https://tkuniverse.space/index.html?p=960">Roselyn</a> is revealed to be the manor’s caretaker. With Edinmire’s prison destroyed, <a href="https://tkuniverse.space/index.html?p=961">captured wolves</a> are being sent to the manor’s dungeons. Team A take some time to rest, with <a href="https://tkuniverse.space/index.html?p=970">Natani and Keith</a> getting some alone time. <a href="https://tkuniverse.space/index.html?p=973">“Wanna touch ‘em?”</a> The next morning, <a href="https://tkuniverse.space/index.html?p=980">trouble</a> finds Team B in the form of <a href="https://tkuniverse.space/index.html?p=982">Carver!</a> <a href="https://tkuniverse.space/index.html?p=991">Clovis</a>, Carver’s boss, is hinted at. Carver is <a href="https://tkuniverse.space/index.html?p=996">defeated</a>, but Zen is <a href="https://tkuniverse.space/index.html?p=998">injured</a>. Reni <a href="https://tkuniverse.space/index.html?p=1002">rushes</a> to Team B’s aid, and the groups finally <a href="https://tkuniverse.space/index.html?p=1005">unite</a> once more! While recovering from the flight, Reni describes her lineage & <a href="https://tkuniverse.space/index.html?p=1014">dragon hierarchy</a>. The group <a href="https://tkuniverse.space/index.html?p=1018">gate</a> back via gatekey. <a href="https://tkuniverse.space/index.html?p=1020">Euchre</a> gives Rose a warning. <a href="https://tkuniverse.space/index.html?p=1022">Carver’s fate</a>.`,
            start: 946, 
            end: 1022
        },
        { 
            title: "Chapter 20", 
            description: `Zen <a href="https://tkuniverse.space/index.html?p=1024">wakes up</a> in the manor hospital with Kathrin. <a href="https://tkuniverse.space/index.html?p=1030">Trace and Rose</a> have a talk, as do <a href="https://tkuniverse.space/index.html?p=1034">Natani and Zen</a>. Mike and Evals discover the <a href="https://tkuniverse.space/index.html?p=1041">Oasis Room</a> and discuss their <a href="https://tkuniverse.space/index.html?p=1044">future</a>. Maddie and Karen find a <a href="https://tkuniverse.space/index.html?p=1048">secret hallway</a> and get into trouble with a <a href="https://tkuniverse.space/index.html?p=1050">stone guardian</a>, leading to Rose becoming <a href="https://tkuniverse.space/index.html?p=1054">unshackled</a>. Maddie reveals <a href="https://tkuniverse.space/index.html?p=1055">the truth</a>. Meanwhile, Raine has a <a href="https://tkuniverse.space/index.html?p=1060">problem</a>. Reni’s <a href="https://tkuniverse.space/index.html?p=1085">human form</a> is revealed, and the group have a party! <a href="https://tkuniverse.space/index.html?p=1088">Maren and Sythe</a> get to know each other. But <a href="https://tkuniverse.space/index.html?p=1092">something awakens</a> in the estate. Elsewhere, <a href="https://tkuniverse.space/index.html?p=1098">Adira is taken</a> by soldiers.`,
            start: 1023, 
            end: 1098
        },
        { 
            title: "Chapter 21", 
            description: `<a href="https://tkuniverse.space/index.html?p=1100">Trace and Flora</a> are teleported to the secret hallway and meet Stoney! He’s friendly. Meanwhile, the Oasis party are <a href="https://tkuniverse.space/index.html?p=1103">attacked</a> by Trace’s other attempts at stone guardians. Dark secrets from Trace’s past are uncovered. Saria was with child when she died, and <a href="https://tkuniverse.space/index.html?p=1113">Rose isn’t what she seems</a>. Clovis <a href="https://tkuniverse.space/index.html?p=1121">breaks into the estate</a> during the chaos. His men attack Sythe and go after Zen. In the greenhouse, among twisted Rose vines, <a href="https://tkuniverse.space/index.html?p=1124">Detritus</a> makes his entrance. He plans to bring Saria back to life by using Maren’s body. <a href="https://tkuniverse.space/index.html?p=1129">Reni breaks out</a> of the Oasis Room, freeing the others. Clovis enters the dungeons and <a href="https://tkuniverse.space/index.html?p=1133">takes out his own men</a>, seemingly to be closing loose ends. <a href="https://tkuniverse.space/index.html?p=1137">Nibbly defends a wounded Sythe</a>, then leads him to the hidden hallway. <a href="https://tkuniverse.space/index.html?p=1143">Clovis and Reni fight</a>. Kat is attacked by Clovis’ other wolf, but is helped by Zen and Eric. <a href="https://tkuniverse.space/index.html?p=1156">Stoney fights Detritus</a> and saves the day!`,
            start: 1099, 
            end: 1188
        },
        { 
            title: "Chapter 22", 
            description: `Synopsis Pending`,
            start: 1189, 
            end: lastPage
        },
    ];

    const archiveContainer = document.getElementById('archive');

chapters.forEach((chapter) => {
    const chapterDiv = document.createElement('div');
    chapterDiv.className = 'chapter';

    const chapterHeader = document.createElement('div');
    chapterHeader.className = 'chapter-header';
    chapterHeader.textContent = chapter.title;

    const chapterDescription = document.createElement('div');
    chapterDescription.className = 'chapter-description';
    chapterDescription.innerHTML = chapter.description;

    const chapterContent = document.createElement('div');
    chapterContent.className = 'chapter-content';
    chapterContent.style.display = 'none';

    chapterDiv.appendChild(chapterHeader);
    chapterDiv.appendChild(chapterDescription);
    chapterDiv.appendChild(chapterContent);
    archiveContainer.appendChild(chapterDiv);

    let isLoaded = false;

    chapterHeader.addEventListener('click', () => {
        document.querySelectorAll('.chapter-content').forEach((content) => {
            if (content !== chapterContent) {
                content.style.display = 'none';
            }
        });

        chapterContent.style.display = chapterContent.style.display === 'block' ? 'none' : 'block';

        if (!isLoaded && chapterContent.style.display === 'block') {
            const thumbnailsDiv = document.createElement('div');
            thumbnailsDiv.className = 'thumbnails';

            for (let i = chapter.start; i <= chapter.end; i++) {
                const thumbnailDiv = document.createElement('div');
                thumbnailDiv.className = 'thumbnail';

                const link = document.createElement('a');
                link.href = `index.html?p=${i}`;

                const image = document.createElement('img');
                image.src = `https://twokinds-universe.github.io/pages/preview/${i}.png`;
                image.alt = `Page ${i}`;
                image.className = 'page-preview';

                const pageNumber = document.createElement('div');
                pageNumber.className = 'page-number';
                pageNumber.textContent = `Page ${i}`;

                link.appendChild(image);
                thumbnailDiv.appendChild(link);
                thumbnailDiv.appendChild(pageNumber);
                thumbnailsDiv.appendChild(thumbnailDiv);
            }

            chapterContent.appendChild(thumbnailsDiv);
            isLoaded = true;
        }
    });
});

}

initialize();
