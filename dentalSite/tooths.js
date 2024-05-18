const states = {
    healthy: {
        title: "здоровый зуб, не леченный",
        color: '#FFFFFF',
        opacity: 1,
    },
    extracted: {
        title: "удален/отсутствует",
        color: '#FFFFFF',
        opacity: 0.2,
    },
    caries: {
        title: "кариес",
        color: '#F48484',
        opacity: 1,
    },
    cured: {
        title: "вылеченный зуб",
        color: '#9ED17F',
        opacity: 1,
    },
}

const arr = ['healthy', 'extracted', 'caries', 'cured'];

const meta = [
    {
        src: 'https://storage.cluster.ivnix.ru/med-it/28d06a576d8ca33a153fa0c28ee1ee66.svg',
        name: '18',
        top: 483,
        left: 208,
        state: 'extracted'
    },
    {
        src: 'https://storage.cluster.ivnix.ru/med-it/7e19f9450e05f72bb7bc7207cba703fe.svg',
        name: '17',
        top: 397,
        left: 216
    },
    {
        src: 'https://storage.cluster.ivnix.ru/med-it/e332a8330b9df3730641e81a3bd4b960.svg',
        name: '16',
        top: 324,
        left: 238
    },
    {
        src: 'https://storage.cluster.ivnix.ru/med-it/dee233fe9867af0524210045569d97e4.svg',
        name: '15',
        top: 247,
        left: 253
    },
    {
        src: 'https://storage.cluster.ivnix.ru/med-it/75c3ddff0a51bb71c165fcfec7b75804.svg',
        name: '14',
        top: 181,
        left: 284
    },
    {
        src: 'https://storage.cluster.ivnix.ru/med-it/39b2b2e26091ed9d3791b1b71a3ad601.svg',
        name: '13',
        top: 122,
        left: 317
    },
    {
        src: 'https://storage.cluster.ivnix.ru/med-it/db8a37443c607309036c318b84539417.svg',
        name: '12',
        top: 87,
        left: 359
    },
    {
        src: 'https://storage.cluster.ivnix.ru/med-it/9a7cebf7e5bc6be822a9f969242cb3e3.svg',
        name: '11',
        top: 70,
        left: 418
    },
    ////
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/51c55b34b76659d024a9161ee0ebc1ad.svg',
        name: '21',
        top: 70,
        left: 478
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/57f956ba502baa0f2f203d54047ca1b0.svg',
        name: '22',
        top: 88,
        left: 532
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/fa16e5ba382dd0c487c299092b4ccda4.svg',
        name: '23',
        top: 123,
        left: 575
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/bb56232be4648eb068a80d6cba354f3a.svg',
        name: '24',
        top: 183,
        left: 597
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/485ee594633d7fa51c88a8b3888310c1.svg',
        name: '25',
        top: 249,
        left: 638
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/64152f233786214798accc7f8dedff53.svg',
        name: '26',
        top: 324,
        left: 655,
        state: 'cured'
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/c5ed34dffc1d3b1d448539eb47df9bae.svg',
        name: '27',
        top: 398,
        left: 676
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/b6a50def2772c4ac847e62b90c5f017e.svg',
        name: '28',
        top: 484,
        left: 684,
        state: 'extracted'
    },
    ////
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/9ac4c40d3432781a877bc9b9ae44d7c3.svg',
        name: '38',
        top: 650,
        left: 731,
        state: 'extracted'
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/e9000985b65bd499e1c5aa8fcab30b9a.svg',
        name: '37',
        top: 746,
        left: 700,
        state: 'caries'
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/b96ddcea165588c577432402a10b2863.svg',
        name: '36',
        top: 836,
        left: 676
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/48cdb8f17029fddb52a4205014f9aa29.svg',
        name: '35',
        top: 917,
        left: 643
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/85c3627f8b45d4fa6385efde5b68522a.svg',
        name: '34',
        top: 978,
        left: 614
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/07a13b998884787f5857fcb92af3a293.svg',
        name: '33',
        top: 1021,
        left: 580
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/c03af4565935159fc538bd701dd02b6b.svg',
        name: '32',
        top: 1045,
        left: 534
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/03ca4f2827ee19e9d722840bbb7998ac.svg',
        name: '31',
        top: 1060,
        left: 482
    },
    ////
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/913368f9c7f1aed37697b3d8b3f79158.svg',
        name: '41',
        top: 1062,
        left: 425
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/71cee701d931c24f74b3c652a72f50c1.svg',
        name: '42',
        top: 1047,
        left: 366
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/c977f2289d7423da2def70e3c0233e4d.svg',
        name: '43',
        top: 1022,
        left: 310
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/eb489766c295f120473fac98de96ca17.svg',
        name: '44',
        top: 980,
        left: 270
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/4d1783ae82c43f1af3dff239c2a9fce2.svg',
        name: '45',
        top: 918,
        left: 238
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/897e96ebc365aaa206d8467ddbb3c29a.svg',
        name: '46',
        top: 837,
        left: 205,
        state: 'cured'
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/6188fce0da9d892f90e329747fe31af0.svg',
        name: '47',
        top: 747,
        left: 178
    },
     {
        src: 'https://storage.cluster.ivnix.ru/med-it/6b9ae29c97646a6f0388521c613ee09c.svg',
        name: '48',
        top: 651,
        left: 146,
        state: 'extracted'
    },
] 

addEventListener("DOMContentLoaded", async () => {

    const container = document.querySelector('.toothsContainer');

    const getPathOfTeeth = teeth => teeth.querySelector('path');

    const handleTooth = (teeth, state) => {
        teeth.style.opacity = state.opacity;
        const path = getPathOfTeeth(teeth);
        path.style.fill = state.color;
    }

    for (item of meta) {
        const response = await fetch(item.src);
        const responseBody = await response.text();
        const div = document.createElement('div');
        div.innerHTML = responseBody;
        const svg = div.firstChild;
        svg.style.position = 'absolute';
        svg.style.top = item.top + 'px';
        svg.style.left = item.left + 'px';
        if (item.state) {
            handleTooth(svg, states[item.state]);
        }
        container.appendChild(svg);
    }

    const tooths = document.querySelectorAll('svg');
    tooths.forEach(teeth => {
        let counter = 1;
        const path = getPathOfTeeth(teeth);
        path.style.cursor = 'pointer';
        teeth.addEventListener('click', () => {
            const state = states[arr[counter]];
            handleTooth(teeth, state);
            if (counter === arr.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
        })
    })
});