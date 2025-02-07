<template>
  <div class="container">
    <div>
      <h1>Font Awesome Web 应用图标</h1>
    </div>
    <br />
    <hr />
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>图标</th>
            <th>CSS样式</th>
            <th>代码示例</th>
            <th>按钮</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(option, index) in uniqueOptions" :key="index" :value="option">
            <td><code>{{ index +1 }}</code></td>
            <td><code><i :class="option"></i></code></td>
            <td><code>{{option}}</code></td>
            <td><code>< i class="{{option}}" > < i /></code></td>
            <td><button type="button" class="btn btn-warning" @click="cli(index+1)">警告按钮</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const options = ref([
  "fa fa-address-book",  "fa fa-address-card",  "fa fa-address-card",  "fa fa-adjust",  "fa fa-american-sign-language-interpreting",  "fa fa-anchor",  "fa fa-archive",  "fa fa-area-chart",  "fa fa-arrows",  "fa fa-arrows-h",  "fa fa-arrows-v",  "fa fa-asl-interpreting",  "fa fa-assistive-listening-systems",  "fa fa-asterisk",  "fa fa-at",  "fa fa-automobile",  "fa fa-audio-description",  "fa fa-balance-scale",  "fa fa-ban",  "fa fa-bank",  "fa fa-bar-chart",  "fa fa-bar-chart",  "fa fa-barcode",  "fa fa-bars",  "fa fa-bath",  "fa fa-bathtub",  "fa fa-battery-0",  "fa fa-battery-2",  "fa fa-battery-3",  "fa fa-battery-4",  "fa fa-battery-empty",  "fa fa-battery-full",  "fa fa-battery-half",  "fa fa-battery-quarter",  "fa fa-battery-three-quarters",  "fa fa-bed",  "fa fa-beer",  "fa fa-bell",  "fa fa-bell",  "fa fa-bell-slash",  "fa fa-bell-slash",  "fa fa-bicycle",  "fa fa-binoculars",  "fa fa-birthday-cake",  "fa fa-blind",  "fa fa-bolt",  "fa fa-bomb",  "fa fa-book",  "fa fa-bookmark",  "fa fa-bookmark",  "fa fa-braille",  "fa fa-briefcase",  "fa fa-bug",  "fa fa-building",  "fa fa-building",  "fa fa-bullhorn",  "fa fa-bullseye",  "fa fa-bus",  "fa fa-cab",  "fa fa-calculator",  "fa fa-calendar",  "fa fa-calendar",  "fa fa-calendar-check",  "fa fa-calendar-minus",  "fa fa-calendar-plus",  "fa fa-calendar-times",  "fa fa-camera",  "fa fa-camera-retro",  "fa fa-car",  "fa fa-caret-square-down",  "fa fa-caret-square-left",  "fa fa-caret-square-right",  "fa fa-caret-square-up",  "fa fa-cart-arrow-down",  "fa fa-cart-plus",  "fa fa-certificate",  "fa fa-check",  "fa fa-check-circle",  "fa fa-check-circle",  "fa fa-check-square",  "fa fa-check-square",  "fa fa-child",  "fa fa-circle",  "fa fa-circle-notch",  "fa fa-clock",  "fa fa-clone",  "fa fa-close",  "fa fa-cloud",  "fa fa-cloud-download",  "fa fa-cloud-upload",  "fa fa-code",  "fa fa-code-fork",  "fa fa-coffee",  "fa fa-cog",  "fa fa-cogs",  "fa fa-comment",  "fa fa-comment",  "fa fa-comments",  "fa fa-comments",  "fa fa-commenting",  "fa fa-commenting",  "fa fa-compass",  "fa fa-copyright",  "fa fa-credit-card",  "fa fa-credit-card-alt",  "fa fa-creative-commons",  "fa fa-crop",  "fa fa-crosshairs",  "fa fa-cube",  "fa fa-cubes",  "fa fa-cutlery",  "fa fa-dashboard",  "fa fa-database",  "fa fa-deaf",  "fa fa-deafness",  "fa fa-desktop",  "fa fa-diamond",  "fa fa-dot-circle",  "fa fa-download",  "fa fa-drivers-license",  "fa fa-drivers-license",  "fa fa-edit",  "fa fa-ellipsis-h",  "fa fa-ellipsis-v",  "fa fa-envelope",  "fa fa-envelope",  "fa fa-envelope-open",  "fa fa-envelope-open",  "fa fa-envelope-square",  "fa fa-eraser",  "fa fa-exchange",  "fa fa-exclamation",  "fa fa-exclamation-circle",  "fa fa-exclamation-triangle",  "fa fa-external-link",  "fa fa-external-link-square",  "fa fa-eye",  "fa fa-eye-slash",  "fa fa-eyedropper",  "fa fa-fax",  "fa fa-female",  "fa fa-fighter-jet",  "fa fa-file-archive",  "fa fa-file-audio",  "fa fa-file-code",  "fa fa-file-excel",  "fa fa-file-image",  "fa fa-file-pdf",  "fa fa-file-powerpoint",  "fa fa-file-video",  "fa fa-file-word",  "fa fa-film",  "fa fa-filter",  "fa fa-fire",  "fa fa-fire-extinguisher",  "fa fa-flag",  "fa fa-flag-checkered",  "fa fa-flag",  "fa fa-flask",  "fa fa-folder",  "fa fa-folder",  "fa fa-folder-open",  "fa fa-folder-open",  "fa fa-frown",  "fa fa-futbol",  "fa fa-gamepad",  "fa fa-gavel",  "fa fa-gear",  "fa fa-gears",  "fa fa-genderless",  "fa fa-gift",  "fa fa-globe",  "fa fa-graduation-cap",  "fa fa-hard-of-hearing",  "fa fa-hdd",  "fa fa-handshake",  "fa fa-hashtag",  "fa fa-headphones",  "fa fa-heart",  "fa fa-heart",  "fa fa-heartbeat",  "fa fa-history",  "fa fa-home",  "fa fa-hotel",  "fa fa-hourglass",  "fa fa-hourglass-1",  "fa fa-hourglass-2",  "fa fa-hourglass-3",  "fa fa-hourglass-end",  "fa fa-hourglass-half",  "fa fa-hourglass",  "fa fa-hourglass-start",  "fa fa-i-cursor",  "fa fa-id-badge",  "fa fa-id-card",  "fa fa-id-card",  "fa fa-image",  "fa fa-inbox",  "fa fa-industry",  "fa fa-info",  "fa fa-info-circle",  "fa fa-institution",  "fa fa-key",  "fa fa-keyboard",  "fa fa-language",  "fa fa-laptop",  "fa fa-leaf",  "fa fa-legal",  "fa fa-lemon",  "fa fa-level-down",  "fa fa-level-up",  "fa fa-life-ring",  "fa fa-lightbulb",  "fa fa-line-chart",  "fa fa-location-arrow",  "fa fa-lock",  "fa fa-low-vision",  "fa fa-magic",  "fa fa-magnet",  "fa fa-mail-forward",  "fa fa-mail-reply",  "fa fa-mail-reply-all",  "fa fa-male",  "fa fa-map",  "fa fa-map",  "fa fa-map-pin",  "fa fa-map-signs",  "fa fa-map-marker",  "fa fa-meh",  "fa fa-microchip",  "fa fa-microphone",  "fa fa-microphone-slash",  "fa fa-minus",  "fa fa-minus-circle",  "fa fa-minus-square",  "fa fa-minus-square",  "fa fa-mobile",  "fa fa-mobile-phone",  "fa fa-moon",  "fa fa-mortar-board",  "fa fa-motorcycle",  "fa fa-mouse-pointer",  "fa fa-music",  "fa fa-navicon",  "fa fa-newspaper",  "fa fa-object-group",  "fa fa-object-ungroup",  "fa fa-paint-brush",  "fa fa-paper-plane",  "fa fa-paper-plane",  "fa fa-paw",  "fa fa-pencil",  "fa fa-pencil-square",  "fa fa-pencil-square",  "fa fa-percent",  "fa fa-phone",  "fa fa-phone-square",  "fa fa-pie-chart",  "fa fa-plane",  "fa fa-plug",  "fa fa-plus",  "fa fa-plus-circle",  "fa fa-plus-square",  "fa fa-plus-square",  "fa fa-podcast",  "fa fa-power-off",  "fa fa-print",  "fa fa-puzzle-piece",  "fa fa-qrcode",  "fa fa-question",  "fa fa-question-circle",  "fa fa-question-circle",  "fa fa-quote-left",  "fa fa-quote-right",  "fa fa-random",  "fa fa-recycle",  "fa fa-refresh",  "fa fa-registered",  "fa fa-remove",  "fa fa-reorder",  "fa fa-reply",  "fa fa-reply-all",  "fa fa-retweet",  "fa fa-road",  "fa fa-rocket",  "fa fa-rss",  "fa fa-rss-square",  "fa fa-search",  "fa fa-search-minus",  "fa fa-search-plus",  "fa fa-server",  "fa fa-share",  "fa fa-share-alt",  "fa fa-share-alt-square",  "fa fa-share-square",  "fa fa-share-square",  "fa fa-shield",  "fa fa-ship",  "fa fa-shopping-bag",  "fa fa-shopping-basket",  "fa fa-shopping-cart",  "fa fa-shower",  "fa fa-sign-in",  "fa fa-sign-out",  "fa fa-sign-language",  "fa fa-signal",  "fa fa-signing",  "fa fa-sitemap",  "fa fa-sliders",  "fa fa-smile",  "fa fa-snowflake",  "fa fa-soccer-ball",  "fa fa-sort",  "fa fa-sort-alpha-asc",  "fa fa-sort-alpha-desc",  "fa fa-sort-amount-asc",  "fa fa-sort-amount-desc",  "fa fa-sort-asc",  "fa fa-sort-desc",  "fa fa-sort-down",  "fa fa-sort-numeric-asc",  "fa fa-sort-numeric-desc",  "fa fa-sort-up",  "fa fa-space-shuttle",  "fa fa-spinner",  "fa fa-spoon",  "fa fa-square",  "fa fa-square",  "fa fa-star",  "fa fa-star-half",  "fa fa-star-half",  "fa fa-star",  "fa fa-sticky-note",  "fa fa-sticky-note",  "fa fa-street-view",  "fa fa-suitcase",  "fa fa-sun",  "fa fa-tablet",  "fa fa-tachometer",  "fa fa-tag",  "fa fa-tags",  "fa fa-tasks",  "fa fa-taxi",  "fa fa-television",  "fa fa-terminal",  "fa fa-thermometer",  "fa fa-thermometer-0",  "fa fa-thermometer-1",  "fa fa-thermometer-2",  "fa fa-thermometer-3",  "fa fa-thermometer-4",  "fa fa-thermometer-empty",  "fa fa-thermometer-full",  "fa fa-thermometer-half",  "fa fa-thermometer-quarter",  "fa fa-thermometer-three-quarters",  "fa fa-thumb-tack",  "fa fa-thumbs-down",  "fa fa-thumbs-up",  "fa fa-ticket",  "fa fa-times",  "fa fa-times-circle",  "fa fa-times-circle",  "fa fa-times-rectangle",  "fa fa-times-rectangle",  "fa fa-tint",  "fa fa-toggle-on",  "fa fa-trademark",  "fa fa-trash",  "fa fa-trash",  "fa fa-tree",  "fa fa-trophy",  "fa fa-truck",  "fa fa-tty",  "fa fa-tv",  "fa fa-umbrella",  "fa fa-universal-access",  "fa fa-university",  "fa fa-unlock",  "fa fa-unlock-alt",  "fa fa-unsorted",  "fa fa-upload",  "fa fa-user",  "fa fa-user-circle",  "fa fa-user-circle",  "fa fa-user",  "fa fa-user-plus",  "fa fa-user-secret",  "fa fa-user-times",  "fa fa-users",  "fa fa-vcard",  "fa fa-vcard",  "fa fa-video-camera",  "fa fa-volume-control-phone",  "fa fa-volume-down",  "fa fa-volume-off",  "fa fa-volume-up",  "fa fa-warning",  "fa fa-wheelchair",  "fa fa-wheelchair-alt",  "fa fa-window-close",  "fa fa-window-close",  "fa fa-window-maximize",  "fa fa-window-minimize",  "fa fa-window-restore",  "fa fa-wifi",  "fa fa-wrench",
]);
// set 去掉重复的值
// const uniqueOptions = ref([...new Set(options.value)]);
  //filter 去掉重复的值
const uniqueOptions = ref(options.value.filter((item, index) => {
  return options.value.indexOf(item) === index;
}));


// 生命周期添加
onMounted(() => {
  console.log('Component has been mounted');
});

// click event
const cli = (val) => {
  alert(val)
};


</script>
<style scoped>
.container {
  text-align: center;
  padding: 20px;
}
</style>
