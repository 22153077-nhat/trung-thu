import * as THREE from "three";


/* =====================================
   LẤY LAYER
===================================== */

const moon =
    document.getElementById("moon");

const stars =
    document.getElementById("stars");

const cloudsBack =
    document.getElementById("clouds-back");

const cloudsFront =
    document.getElementById("clouds-front");


/* =====================================
   THREE.JS
===================================== */

const scene =
    new THREE.Scene();


const camera =
    new THREE.PerspectiveCamera(

        60,

        window.innerWidth /
        window.innerHeight,

        0.1,

        100

    );


const renderer =
    new THREE.WebGLRenderer({

        alpha: true,

        antialias: true

    });


renderer.setSize(

    window.innerWidth,

    window.innerHeight

);


renderer.setPixelRatio(

    Math.min(
        window.devicePixelRatio,
        2
    )

);


renderer.setClearColor(
    0x000000,
    0
);


renderer.domElement.style.position =
    "fixed";

renderer.domElement.style.inset =
    "0";

renderer.domElement.style.zIndex =
    "0";

renderer.domElement.style.pointerEvents =
    "none";


document.body.appendChild(
    renderer.domElement
);


/* =====================================
   LINH KHÍ NỀN
===================================== */

const particleContainer =
    document.getElementById(
        "particles"
    );


for (
    let i = 0;
    i < 40;
    i++
) {

    const particle =
        document.createElement("div");


    particle.className =
        "particle";


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.top =
        40 +
        Math.random() * 50 +
        "%";


    particle.style.animationDelay =
        Math.random() * 4 +
        "s";


    particle.style.animationDuration =
        3 +
        Math.random() * 4 +
        "s";


    particleContainer.appendChild(
        particle
    );

}


/* =====================================
   ANIMATION BỨC TRANH
===================================== */

const clock =
    new THREE.Clock();


function animate() {

    requestAnimationFrame(
        animate
    );


    const time =
        clock.getElapsedTime();


    /* Mặt trăng */

    moon.style.transform =

        `
        translate(
            ${Math.sin(
                time * 0.25
            ) * 4}px,

            ${Math.sin(
                time * 0.5
            ) * 3}px
        )

        rotate(
            ${Math.sin(
                time * 0.15
            ) * 2}deg
        )

        scale(
            ${1 +
                Math.sin(
                    time * 0.7
                ) * 0.015}
        )
        `;


    /* Sao */

    stars.style.transform =

        `
        rotate(
            ${time * 0.015}deg
        )
        `;


    /* Mây sau */

    cloudsBack.style.transform =

        `
        translateX(
            ${Math.sin(
                time * 0.08
            ) * 18}px
        )

        translateY(
            ${Math.sin(
                time * 0.15
            ) * 3}px
        )
        `;


    /* Mây trước */

    cloudsFront.style.transform =

        `
        translateX(
            ${Math.sin(
                time * 0.12
            ) * 25}px
        )

        translateY(
            ${Math.sin(
                time * 0.2
            ) * 4}px
        )
        `;


    renderer.render(
        scene,
        camera
    );

}


animate();


/* =====================================
   LỜI CHÚC
===================================== */

const wishes = [

    {
        title:
            "🏮 Bình An",

        text:
            "Chúc bạn một mùa Trung Thu thật bình an. Mong ánh trăng đêm nay luôn soi sáng con đường bạn đang đi."
    },


    {
        title:
            "🌕 Hạnh Phúc",

        text:
            "Chúc bạn luôn có thật nhiều niềm vui, tiếng cười và những khoảnh khắc hạnh phúc bên gia đình và những người thân yêu."
    },


    {
        title:
            "✨ May Mắn",

        text:
            "Chúc mọi điều may mắn sẽ tìm đến bạn. Mong những điều tốt đẹp nhất luôn xuất hiện đúng lúc."
    },


    {
        title:
            "💰 Thành Công",

        text:
            "Chúc bạn luôn vững bước trên con đường phía trước, đạt được những mục tiêu mình đã đặt ra và ngày càng thành công."
    },


    {
        title:
            "❤️ Yêu Thương",

        text:
            "Chúc trái tim bạn luôn được sưởi ấm bởi tình yêu thương, sự quan tâm và những người luôn ở bên cạnh bạn."
    },


    {
        title:
            "🌟 Ước Nguyện",

        text:
            "Hãy nhắm mắt và ước một điều thật đẹp. Mong điều ước dưới ánh trăng đêm nay sẽ sớm trở thành hiện thực."
    },


    {
        title:
            "🎓 Học Tập",

        text:
            "Chúc bạn luôn giữ được nhiệt huyết, sự cố gắng và đạt được thật nhiều thành tích trên hành trình học tập."
    },


    {
        title:
            "🚀 Tương Lai",

        text:
            "Chúc bạn có một tương lai thật rực rỡ. Mỗi bước đi hôm nay sẽ đưa bạn đến gần hơn với ước mơ."
    },


    {
        title:
            "👨‍👩‍👧‍👦 Gia Đình",

        text:
            "Chúc gia đình bạn luôn mạnh khỏe, vui vẻ và hạnh phúc. Mong mọi người luôn có những mùa Trung Thu đoàn viên."
    },


    {
        title:
            "🌙 Ánh Trăng",

        text:
            "Mong ánh trăng Trung Thu sẽ mang theo những điều dịu dàng nhất, xua tan mệt mỏi và đem đến cho bạn thật nhiều hy vọng."
    }

];


/* =====================================
   LỒNG ĐÈN
===================================== */

const lanternContainer =
    document.getElementById(
        "lantern-container"
    );


/* =====================================
   TẠO LỒNG ĐÈN
===================================== */

function createLantern() {

    const lantern =
        document.createElement("img");


    lantern.className =
        "lantern";


    lantern.src =
        "./images/lantern.png";


    lantern.alt =
        "Lồng đèn Trung Thu";


    /* Vị trí */

    lantern.style.left =
        Math.random() * 92 +
        "%";


    /* Kích thước */

    const size =
        65 +
        Math.random() * 60;


    lantern.style.width =
        size + "px";


    /* Tốc độ */

    const duration =
        14 +
        Math.random() * 8;


    lantern.style.animationDuration =
        duration + "s";


    /* Độ trễ */

    lantern.style.animationDelay =
        Math.random() * 1.5 +
        "s";


    /* Lời chúc */

    const randomWish =
        wishes[
            Math.floor(
                Math.random() *
                wishes.length
            )
        ];


    lantern.dataset.title =
        randomWish.title;


    lantern.dataset.text =
        randomWish.text;


    /* =================================
       CLICK / CHẠM
    ================================= */

    lantern.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            /*
             * Không cho click lại
             * khi đang mở lời chúc
             */

            if (
                lantern.classList.contains(
                    "clicked"
                )
            ) {

                return;

            }


            openLanternWish(
                lantern
            );

        }
    );


    lanternContainer.appendChild(
        lantern
    );


    /* =================================
       XÓA SAU KHI BAY
    ================================= */

    setTimeout(

        function() {

            if (
                !lantern.classList.contains(
                    "clicked"
                )
            ) {

                lantern.remove();

            }

        },

        (duration + 3) * 1000

    );

}


/* =====================================
   LỒNG ĐÈN BAN ĐẦU
===================================== */

for (
    let i = 0;
    i < 6;
    i++
) {

    setTimeout(
        createLantern,
        i * 1100
    );

}


/* =====================================
   LỒNG ĐÈN MỚI
===================================== */

setInterval(
    createLantern,
    2200
);


/* =====================================
   CLICK LỒNG ĐÈN
===================================== */

function openLanternWish(
    lantern
) {

    /* Dừng vị trí hiện tại */

    lantern.classList.add(
        "clicked"
    );


    /* Hiệu ứng chạm */

    lantern.classList.add(
        "touch-effect"
    );


    /* Ánh sáng */

    createMagicEffect(
        lantern
    );


    /*
     * Chờ 650 ms
     * rồi mới mở lời chúc
     */

    setTimeout(

        function() {

            showWish(
                lantern
            );

        },

        650

    );

}


/* =====================================
   HIỆN LỜI CHÚC
===================================== */

function showWish(
    lantern
) {

    const wishBox =
        document.getElementById(
            "wish-box"
        );


    const title =
        document.getElementById(
            "wish-title"
        );


    const text =
        document.getElementById(
            "wish-text"
        );


    /* Tiêu đề */

    title.innerText =
        lantern.dataset.title;


    /* Xóa nội dung cũ */

    text.innerText =
        "";


    /* Hiện hộp */

    wishBox.style.display =
        "flex";


    /*
     * Đọc lời chúc
     * từng chữ
     */

    typeWishText(
        text,
        lantern.dataset.text
    );

}


/* =====================================
   HIỆU ỨNG ĐỌC LỜI CHÚC
===================================== */

function typeWishText(
    element,
    text
) {

    let index = 0;

    const speed = 35;

    element.innerText = "";

    function type() {

        if (
            index < text.length
        ) {

            element.innerText =
                text.substring(
                    0,
                    index + 1
                );

            index++;

            setTimeout(
                type,
                speed
            );

        }

    }

    type();

}

/* =====================================
   HIỆU ỨNG LINH KHÍ
===================================== */

function createMagicEffect(
    lantern
) {

    const rect =
        lantern.getBoundingClientRect();


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const sparkle =
            document.createElement(
                "div"
            );


        sparkle.className =
            "sparkle";


        sparkle.style.left =

            rect.left +
            rect.width / 2 +
            "px";


        sparkle.style.top =

            rect.top +
            rect.height / 2 +
            "px";


        sparkle.style.setProperty(

            "--x",

            (
                Math.random() *
                240 -
                120
            ) + "px"

        );


        sparkle.style.setProperty(

            "--y",

            (
                Math.random() *
                240 -
                120
            ) + "px"

        );


        document.body.appendChild(
            sparkle
        );


        setTimeout(

            function() {

                sparkle.remove();

            },

            1000

        );

    }

}


/* =====================================
   ĐÓNG LỜI CHÚC
===================================== */

const closeButton =
    document.getElementById(
        "close-wish"
    );


closeButton.addEventListener(

    "click",

    function() {

        closeWish();

    }

);


/* =====================================
   CLICK RA NGOÀI
===================================== */

const wishBox =
    document.getElementById(
        "wish-box"
    );


wishBox.addEventListener(

    "click",

    function(event) {

        if (
            event.target ===
            wishBox
        ) {

            closeWish();

        }

    }

);


/* =====================================
   HÀM ĐÓNG
===================================== */

function closeWish() {

    wishBox.style.display =
        "none";


    /*
     * Tìm lồng đèn đang dừng
     */

    const clickedLantern =
        document.querySelector(
            ".lantern.clicked"
        );


    if (
        clickedLantern
    ) {

        /*
         * Cho lồng đèn biến mất
         */

        clickedLantern.style.transition =
            "opacity 0.8s ease";


        clickedLantern.style.opacity =
            "0";


        setTimeout(

            function() {

                clickedLantern.remove();

            },

            800

        );

    }

}


/* =====================================
   RESIZE
===================================== */

window.addEventListener(

    "resize",

    function() {

        camera.aspect =

            window.innerWidth /
            window.innerHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(

            window.innerWidth,

            window.innerHeight

        );

    }

);