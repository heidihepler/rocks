let selectedtype = []
let selectedsubmitter = []
let selectedlocation = []

const items = [
    {
        link: 'rockpages/granite1.html',
        img: '../images/collection/test_photos/granite1.JPEG',
        alt: 'Granite',
        name: 'Granite',
        type: 'Igneous',
        location: 'Silver Lake, MI',
        submitter: 'Heidi Hepler'
    },
    {
        link: '#',
        img: '../images/collection/test_photos/pumice1.JPEG',
        alt: 'Pumice',
        name: 'Pumice',
        type: 'Igneous',
        location: 'Silver Lake, MI',
        submitter: 'Heidi Hepler'
    },
    {
        link: '#',
        img: '../images/collection/test_photos/diamictite1.JPEG',
        alt: 'Diamictite',
        name: 'Diamictite',
        type: 'Sedimentary',
        location: 'Silver Lake, MI',
        submitter: 'Heidi Hepler'
    }
]

function addNewItemBox(item) {
    let itemhtml = 
        `<div class="item_box">
            <a href="${item.link}">
                <div class="img_space">
                    <img class="item_img"
                    src="${item.img}" alt="${item.alt}"> 
                </div>
            </a> 

            <div class="border">
                <div class="text_space">
                    <h3 class="item_name">
                        <a class="item_link" href="${item.link}">
                            ${item.name}
                        </a>
                    </h3>

                    <ul class="info_list">
                        <li>
                            Type: &nbsp; ${item.type}
                        </li>

                        <li>
                            Location: &nbsp; ${item.location}
                        </li>

                        <li>
                            Submitted by: &nbsp; ${item.submitter}
                        </li>
                    </ul>
                </div>
            </div>
        </div>`

    var scrollbox = document.getElementById('scroll')
    scrollbox.innerHTML += itemhtml
}

function addAllItemBoxes() {
    var scrollbox = document.getElementById('scroll')
    scrollbox.innerHTML = ''
    for (var i = 0; i < items.length; i ++){
        if (selectedtype.length > 0 && !(selectedtype.indexOf(items[i].type) > -1)) continue
        if (selectedlocation.length > 0 && !(selectedlocation.indexOf(items[i].location) > -1)) continue
        if (selectedsubmitter.length > 0 && !(selectedsubmitter.indexOf(items[i].submitter) > -1)) continue
        addNewItemBox(items[i])
    }
}

window.onload = (e) => {addAllItemBoxes();
    document.getElementById('submit').onclick = function() {
        var select = document.getElementById('types');
        selectedtype = [...select.options]
                        .filter(option => option.selected)
                        .map(option => option.value);
        var select = document.getElementById('locations');
        selectedlocation = [...select.options]
                        .filter(option => option.selected)
                        .map(option => option.value);
        var select = document.getElementById('submitters');
        selectedsubmitter = [...select.options]
                        .filter(option => option.selected)
                        .map(option => option.value);
        addAllItemBoxes();
    }
}
