window.onload = function() {

    var data = {
        pages: [
            {
                name: 'Google',
                items: [
                    {
                        id: 'example',
                        tooltip:'example',
                        icon: 'sitesgooglecom',
                        link: 'example'
                    },
                    {
                        id: 'example',
                        tooltip:'example',
                        icon: 'sitesgooglecom',
                        link: 'example'
                    }
                ]
            },
            {
                name: 'Misc',
                items: [
                    {
                        id: 'example',
                        tooltip:'example',
                        icon: 'example',
                        link: 'example'
                    }
                ]
            },
            {
                name: 'Tools',
                items: [
                    {
                        id: 'example',
                        tooltip:'example',
                        icon: 'example',
                        link: 'example'
                    }
                ]
            },
            {
                name: 'Reference',
                items: [
                    {
                        id: 'example',
                        tooltip:'example',
                        icon: 'example',
                        link: 'example'
                    }
                ]
            },
            {
                name: 'Nuvi',
                items: [
                    {
                        id: 'example',
                        tooltip:'example',
                        icon: 'example',
                        link: 'example'
                    }
                ]
            },
            {
                name: 'Banyan',
                items: [
                    {
                        id: 'example',
                        tooltip:'example',
                        icon: 'example',
                        link: 'example'
                    }
                ]
            },
            {
                name: 'Music',
                items: [
                    {
                        id: 'example',
                        tooltip:'example',
                        icon: 'example',
                        link: 'example'
                    }
                ]
            }
        ],            
        theme: {

        }
    }
    loadSections(data);
};

function loadSections(data) {
    var numberOfPages = data.pages.length;
    console.log(numberOfPages);
    for(i=0; i<numberOfPages; i++) {
        var e = i+1
        var bodyLength = e + "00vw"
        console.log(bodyLength);
        $("body").css('width', bodyLength);
        var sectionTemplate = "<div class=\"section\" id=\"section-" + e + "\"><div class=\"section-box\" id=\"section-box-" + e + "\"><h1>" + data.pages[i].name + "</h1></div></div>";
        $( "#canvas" ).append(sectionTemplate, loadItems(data, i, e));
    }
}

function loadItems(data, i, e) {
    var numberOfItems = data.pages[i].items.length;
    console.log(numberOfItems);
    for (j=0; j<numberOfItems; j++) {
        console.log(data, i, e);
        selector = "#section-box-" + e;
        console.log(selector);
        var itemTemplate = "<a href=\"" + data.pages[i].items[j].link + "\" target=\"blank\"><span class=\'tag\' data-tippy=\"" + data.pages[i].items[j].tooltip + "\"><div class=\'favicon\' id=\'" + data.pages[i].items[j].icon + "\'></div></span></a>"
        $(selector).append(itemTemplate, loggie());
    }
}

function loggie() {
    console.log("Added Item")
};


