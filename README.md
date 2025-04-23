# Vue3 Face Recognizer for Laravel + Vue + ShadCn projects

Face Recognizer for Vue3

## Use Case

* Vue3FaceRecog
* the template uses tailwind css in its class

```sh

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const training_data = [
    {
        name: "Felipe",
        images: ["/labels/Felipe/1.jpg", "/labels/Felipe/2.jpg"],
    },
    {
        name: "Messi",
        images: ["/labels/Messi/1.jpg", "/labels/Messi/2.jpg"],
    },
    {
        name: "Data",
        images: ["/labels/Data/1.jpg", "/labels/Data/2.jpg"],
    },
    {
        name: "Garry",
        images: [
            "/labels/Garry/1.jpg", "/labels/Garry/2.jpg",
            "https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/453301894_26310634645219263_3469027653173770258_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHCpk4D4t5CVeLOE_JMcDTpft99dKY79sJ-3310pjv2wtDhfRTIv1arY14mYB2u1nXtzOLNKgHeRerMfG5tlf_P&_nc_ohc=SeZ66R3VKIAQ7kNvwHg_g6j&_nc_oc=AdnlOZYS0pooK5qGni_bjxemqQL4VnT0dUZjkYRfQVc-DAUuR7xyk8Bx4fQDOCCze2I&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=rU5kgJZx2t4Vp9Je_2DFoQ&oh=00_AfFthUPswuK-8ZwB7wOEetfk0eKenltbvoTv9WSpikIZ6A&oe=680E4465",
            "https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/461169407_8297452433675803_2581180205887555989_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7094&_nc_eui2=AeE1MmEwNmZgH4YfU5oaaGxOEYJWzx86KdARglbPHzop0KvUvOyPNaIccX8LxrPurC0p1DO6t5Ph6NVKudDKaGQm&_nc_ohc=6JhAV5gAMzIQ7kNvwEqm9L0&_nc_oc=AdmPBkfghsId8zLQ2hOF4mqn2qrSurYCwzB-I5gzj4wvWTDydRVKgB_Vs9YkV8PGzhQ&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=ELwHI6XCpCvKjbmT8BV3pA&oh=00_AfF8GW4UhthvaI0CMy5wHSApGAC_iR_HG3hrRWiDhWtYKw&oe=680E0BBF",
            "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/461169407_8297452433675803_2581180205887555989_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7094&_nc_eui2=AeE1MmEwNmZgH4YfU5oaaGxOEYJWzx86KdARglbPHzop0KvUvOyPNaIccX8LxrPurC0p1DO6t5Ph6NVKudDKaGQm&_nc_ohc=CPO8LbJPZYQQ7kNvwHF-UQU&_nc_oc=AdmR5xrKx9vkaKWnMGp-bqSMCNklQBN_CH7ZlRPDTZp3YeBasfLMMHA760P13_SLhe4&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=_Bf0AbCR_CbcsT8w9WPTUA&oh=00_AfGESaVu1oUHVBMz0XkOqnJfe-nUp0AWzsmQgiq-IJmtjg&oe=6809363F",
            "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/465782553_10161159446454092_2602332091773645185_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEwPDqJ9shkkRQ5j_hOxEHpPri_tAn3tbM-uL-0Cfe1sxVmy_BY3-dbv_hh5b3g1VzaYEj_-_22-IBau8v57Yap&_nc_ohc=ZAeOf5oASDsQ7kNvwELJH6X&_nc_oc=AdlF9FFdpz-y-DcZtyMQRekSeOHd-icsOT1ya8X3X0vWnWANzRnJaTADMkknrBhqbEM&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=8MP3IEYSR7e6QlhG0oGDSQ&oh=00_AfG2FSV2DdpKCHQ9tw-muwnEBdUgZ-siE-AE_uC-ZImG0A&oe=68090FA2",
            "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/459889279_26849214878027901_7013988479687942446_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHcYAsHBZ2mkVlT1joelLSLLsp7SJ6QGW4uyntInpAZbkxDXinJa1SZviZDySx5USHx6hEbyj561n1vUFxJp4uD&_nc_ohc=Z8FSSCpto88Q7kNvwGp7Rz4&_nc_oc=AdnPhiaO2ZP30QndE4C7WDlpmRTm7mnMjzX-qGA-Z6jbVGkEVqnV-aS2ZDL7csGbYW0&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=sPTcoXXdAfW7dISkXrqRMg&oh=00_AfEqmIUDh_ByfWCPFLBmqkwDgIJiuv5aNUwcJwl-Vo14KA&oe=680931E1",
        ],
    },
    {
        name: "Sweet Sweet",
        images: [
            "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/491958015_1741826886743679_6873391425685042853_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHTqABMWgJJfTJBd0B9m2x20_6z-2Lu52DT_rP7Yu7nYIXkz1KCfe7GjENMqv_R6pCGEC9uKUxqdQ0LJ1Uqy5BX&_nc_ohc=-W0v40B0ceAQ7kNvwGUGds5&_nc_oc=AdkVFWEnS5Idaf0l88SfbmgtZf9JuS9UvwyHx8hrVaOJPy4NhcVXAVuKtPCkOKrh_r0&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=wyjIMIE864msBZWLGxpuEQ&oh=00_AfFiHg6wMdDKug2h_8tW1Xw873G_tj0mPLyP4Cc0zSPeJA&oe=6809009E",
            "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/488178180_1729791727947195_2749432054859476183_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH1GlgJnsdR4CcAmC_YtIxpLsWmCdhr_KMuxaYJ2Gv8o_F-Je6Zd1oFeEK2AI0d6vn49EdwzUrlo1mDDcZ7xbbu&_nc_ohc=kecxgyQh5x8Q7kNvwFqjuUt&_nc_oc=AdlBtbY-FIw_8GGDigNEwqUer24WQlElVgT0SQ7AZS2s2t7FrWJfOA1jPnOUy3dRqXc&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=CWUpWRnKSUGIklCKU31CnQ&oh=00_AfGPMcFoG81f4ElDUVbPL1_3di4DNIn3n1ElFrkqFcy2Iw&oe=6809309C",
            "https://scontent.fceb6-2.fna.fbcdn.net/v/t39.30808-6/482030338_1709345729991795_8441657627238964072_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF5u8IS_IU0jdanyPg7O5zy0lVDHf0PfG7SVUMd_Q98buhRIiEXsieTcbJGaKWlaPrduCLV8TBBm1rkS8cQNxYy&_nc_ohc=ba8fqx6VaegQ7kNvwHQS6he&_nc_oc=AdlDdRJKtkl4ZlPVDoV-x6XSEOHvU-uSPs-ApqXNfm-35KGfOCA7zhEyLwDVB8ywPgA&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_gid=Z6xYJcOIB9VkNevw3dZVHA&oh=00_AfFUaaGVFsFf723B9SeAzSQQY05kY4tgpp3hGRj4G5Prww&oe=680901B2",
            "https://scontent.fceb6-2.fna.fbcdn.net/v/t39.30808-6/482018776_1705985003661201_6866237238867411005_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHvPv0R13FDsAG1uGcDyBsRwDyrjtAjvDDAPKuO0CO8MM4X_g5_fPm8hVhel0j2HayOg4AB4vLpcV_mH6xXv-6f&_nc_ohc=eaq03aqEXE8Q7kNvwHRl-5T&_nc_oc=AdkpYV8IrDl-rtDVWiprOgRftXBhFR08JQqbtd7TJjVk_-LSiS-XKr3OPLps9TZmfUs&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_gid=WzeHRcYLlLs-p1Qd2_DOGw&oh=00_AfFxGRohxVzLx9zKQUZVFmtIJnUwlLh80ZwGvbBzh6uygA&oe=6808FED8",
        ],
    },
    {
        name: "Giannah Bella",
        images: [
            "../labels/Gianna/IMG20241003094453.jpg",
            "../labels/Gianna/IMG20241023130321.jpg",
            "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/469864420_18471408577017022_7695272385786972972_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG3z5Z28E5GbtWUnZK0XbuWXBl4rNqzEThcGXis2rMROFAQKMPVXEPG91JgWzbl2g1b8swmLURzQZgdVIxzNssH&_nc_ohc=Mmj_krfxWoIQ7kNvwEa_z-W&_nc_oc=AdkUMijsy-k8KY3A7l4_bF5W__ftwJoqug-UKBDWfym0c11wcjpXKl6-3U6W3_Jyuss&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=Q4SBVMufRI9VCOLdCXI_Kw&oh=00_AfEi7Y8chg3txwr5uz8Ik1ZYTyLokv2eCTnLigw_bKZ3Eg&oe=6809297D",
            "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/469702416_18471408886017022_9144433638876269205_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHye2QTaZ-DKaEWB2Wb1DXEmNd_qH6yi5iY13-ofrKLmFj7OQM-mX7AiNmfCTFPWxeHjGzklVJh0GqxKNfHVQLM&_nc_ohc=pSbmkVjMQ88Q7kNvwE01KU3&_nc_oc=Adm4FsceleB48De0yYkH2Vxl2q4j3sgsgqj6yG5QdPD5MP_AerwuCNtLALJwVt9X9Rk&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=BBMDBtxZ4wljeY9akYOi_w&oh=00_AfEEmEryv4wAsR1oZPltmRE9Nji3-HTgOz0i7dYDHVTWjQ&oe=6809120C",
        ],
    },
    {
        name: "Vann dela Cruz",
        images: [
            "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/491354487_4004770899842035_5313976838712998161_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH7TR78nqlDUngtAS-Zy7oOssxkEtWrSBayzGQS1atIFh1h0-cj6An_w2ZMMXXCsuj9Y9XGKG_JCEnXMk9p-qBH&_nc_ohc=C-3YhyUcGqYQ7kNvwHKoizk&_nc_oc=AdnNGXkyNjD7hMr_AZRk6Kn5nfv3MwqYVU75HQW8Dez-iZECbeZUEtt8FWKzOETvuEU&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=snTwFygwhYpS3FRIJtvJaQ&oh=00_AfGFYU1K1W4p5FYxbz4tO1YswxaScMC8sPMAiAArjWbGsw&oe=68090F17",
            "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/489770320_3997932953859163_3172372066499534477_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF4l4mxlNI3E8HXfXp-QIQ_ikfHEThhJ7GKR8cROGEnsfBrONqmGWMv0HFduERoX11dbmnwdZaSod1P1m7eZYHm&_nc_ohc=8tAEeqMmE3IQ7kNvwED8H9B&_nc_oc=AdnSNgGP0lCEBerz-O6FJCtmYceiGYsWx6CMT3ZIpEeB-zcwVN_8xh8kEOPe9j_c2G4&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=kQL4q8XA_rJETZPGkg3dQA&oh=00_AfFgZoGNbNhl7J9KsfLAiJ6wUH3YDw8E0NoFMLY-MYWRhQ&oe=6809082B",
        ],
    },
    {
        name: "Grace dela Cruz",
        images: [
            "https://scontent.fceb6-2.fna.fbcdn.net/v/t39.30808-6/463869766_10229680616574383_6364438004125494629_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFU1kflmLSEKwO_C8FOFGURFwAqfQSeu-UXACp9BJ675dm3Om8ao2c0RLqYpD6oZtd_m6VUNoSR9_tEjGJO8D8v&_nc_ohc=Bpfn_ieahWYQ7kNvwENpR1t&_nc_oc=AdlGhR5AmCwjPuLZcnRWe0_nV2sqGWC8ixsGJpmrQuSwBW5DwhaQWco9Nuk3L1GkoA8&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_gid=Pbj-UJVb4-ew5IBbDkxRPQ&oh=00_AfExwU36V3Yc0rKVYY_yg0e9V-zOuHkXMpeUDAQzeqChwQ&oe=68093698",
            "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/463733405_10229680616614384_4238841187617797270_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGbpuTUgSa0YK4hmBFTPqD59f4P6pGNt1z1_g_qkY23XGGWG9CrbsT6W89GU6XDzhY29vV2qSy6D-n0KieB6lqt&_nc_ohc=IjPN5BKx-Z4Q7kNvwEOoiD6&_nc_oc=AdmSFEimidSh3NiogLEIcMpMf6p3qngNKa6kOVjWp9o9wSa9KVtKRjvTWnyBU_2r-pk&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=StOQodp2w-kWLuRb421R9g&oh=00_AfHNUWBtVn8bWEDJzWnr-Z2vjGEiCoTFE9eDiEVrrzbYlA&oe=68093637",
            "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/463427717_10213322873902156_5125227151273889082_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFYMEuhothToEl5QrrhzllTGOv8iJG218UY6_yIkbbXxZSnQfvj5lxCY9MQSAOgOyJf5mcnhzSEM3NSDecAaHEO&_nc_ohc=4mwrzPL6jOMQ7kNvwFV3v9M&_nc_oc=AdkayC6Anh5a_47CAOcTfqbxER5Q5yrW2Dr2Mp1D7igppJ2iBBv1yQHERCuWcN9WVT8&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=AFSzeivfkcdVZZUwdtJzCA&oh=00_AfE00HGPoea-kPF5qThcoNjp41PMDbFdxT5roqwmIMeHiA&oe=6809212E",
            "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/459741239_26849213654694690_5725659559917962669_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeH8HQQAdxfMXdmDmJHZLclwo8WaJe3EwQSjxZol7cTBBGVvrj9BmjiRhUDHJNYg3GtVqrO1mMiMpXP-z6T0kwAS&_nc_ohc=jRX49zOvuREQ7kNvwHYu-U0&_nc_oc=Adktxbcw-aLEwWYrF71fY3OTZVYF1UOnl_zdcAgK-oT_4XxyPZ6RdqabouRJ-0IfbG4&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=gTOru11ySvkcSNa0y1eZVg&oh=00_AfFZ7NiLWJB9BrX0u_Cwk41jp-SjYGMbPa7la06K8VAv2g&oe=68093234",
        ],
    },
];

import { Vue3FaceRecog } from 'vue3-face-recog';
const video = ref();
const canvas2 = ref();
const faceRecog = ref();

onMounted(() => {
    faceRecog.value.startWebcam(); // maybe not needed
    faceRecog.value.loadModels("/models"); // be sure that /models exists with weight files
    setTimeout(() => {
      faceRecog.value.trainFaceMatching(training_data); // upon finish it will emit handleTrainingDone(xLabeledFaces) in which xLabeledFaces will be save externally
      // or
      // faceRecog.value.obtainFaceMatchingData (xLabeledFaces)
    }, 1000);
    setTimeout(() => {
      faceRecog.value.startFaceMatching();
    }, 4000); // the length of this setTimeout depends on size of training_data
});

const handleTrainingDone = (event) => {
    console.log("Training Done  ", event);
};
const handleMatchFace = (event) => {
    console.log("MatchFace Done  ", event);
};

</script>

<template>

  <div class="relative m-0 p-0 border rounded-lg overflow-hidden w-[600px] h-[450]">
    <video ref="video" width="600" height="450" autoplay class="border rounded-lg"></video>
    <canvas ref="canvas2" width="600" height="450"
      class="absolute top-0 left-0 border rounded-lg"></canvas>
    <Vue3FaceRecog ref="faceRecog" :video="video" :canvas="canvas2"
      @onTrainingDone="handleTrainingDone" @onMatchFace="handleMatchFace" />
  </div>
  <br>
  <input type="text" class="border rounded-lg" />
  <button
    class="bg-black text-white px-4 rounded-lg hover:cursor-pointer hover:bg-gray-700 active:bg-gray-500">Save</button>

</template>

```

## Changes in src/components/index.ts

* Vue3FaceRecog

```sh
import Vue3FaceRecog from './Vue3FaceRecog.vue'
export default Vue3FaceRecog;
```

## Changes in src/components/main.ts

* Vue3FaceRecog

```sh
import type { App } from 'vue';
import Vue3FaceRecog from "@/components";
export default {
  install: (app: App) => {
    app.component('Vue3FaceRecog', Vue3FaceRecog);
  }
};
export {Vue3FaceRecog} ;
```

## Change the name of src/components/Vue3FaceRecog.vue

* as name of your component
* modify the files content as per your requirement

## Changes in package.json

* Vue3FaceRecog
* vue3-face-recog

```sh
{
  "name": "vue3-face-recog",
  "private": false,
  "version": "0.0.1",
  "type": "module",
  "files": [
    "dist"
  ],
  "main": "./dist/vue3-face-recog.umd.js",
  "module": "./dist/vue3-face-recog.js",
  "exports": {
    ".": {
      "import": "./dist/vue3-face-recog.es.js",
      "require": "./vue3-face-recog.umd.js"
    }
  },
  "types": "./dist/main.d.ts",
  "keywords": [
    "vue3-face-recog",
    "Vue3FaceRecog"
  ],

```

## Changes in vite.config.ts

* Vue3FaceRecog
* vue3-face-recog

example:
```sh
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/index.ts",
      name: "Vue3FaceRecog",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `vue3-face-recog.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: {
        main: path.resolve(__dirname, "src/components/main.ts"),
      },
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
```

## Installing to npm package

ex. building
```sh
npm run build
```

ex. for testing
```sh
npm link
```

ex. in testing component user side
```sh
npm link vue3-face-recog
```

ex. login to publish
```sh
npm login
```

ex. publish component
```sh
npm publish
```

