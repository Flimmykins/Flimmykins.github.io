var random_images_array = ["1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
];

path = 'corner/';
var num = Math.floor(Math.random() * random_images_array.length);
var img = random_images_array[num];
var imgStr = '<img src="' + path + img + '">';

document.write(imgStr); document.close();