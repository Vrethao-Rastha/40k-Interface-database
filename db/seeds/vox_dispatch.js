exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('vox_dispatch').del()
      .then(function () {
        // Inserts seed entries
        return knex('vox_dispatch').insert([
            {
                avatar:'/dude.jpg',
                caseNumber:'45-HFK-34KFK-KKL09',
                senderName:'Israfel Polouro',
                date:'',
                content:'Greetings Interrogator Irlven!\nQuite the interesting piece of work you pulled off recently.\nA friendly bit of advice: the Tau are rather displeased with you at the moment.\nHave a nice day!'
            },
            {
                avatar:'/tattoo.png',
                caseNumber:'HFKS66-3KJ9-0-JHRH3',
                senderName:'Ionael Henisma',
                date:'',
                content:'Interrogator Irlven.\nDue to the large amount of current civil unrest in practically all our Hive Cities, and due to the fact my contacts tell me you are directly responsible, I feel we should meet.\nContact instructions broadcast on encrypted sub-channel.\n-Inquisitor Henisma'
            },
            {
                avatar:'/not found.png',
                caseNumber:'ERROR, VOX LOG DELETED FROM REDUNDANT BUFFER',
                senderName:'Elsarryna',
                date:'',
                content:'Rather sloppy, Interrogator.\nYou should choose your friends more carefully in the future...'
            },
        ])
      }) 
    }