<template>
  <div class="bg-dark h-full">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <div class="flex" style="height: auto">
      <!-- side nav -->
      <div class="w-56 bg-black flex-none" >
        <div class="p-6">
          <img src="./assets/logo4.png" class="h-10" style="filter: brightness(0) invert(1)">
        </div>
        <div class="mx-2 mb-5">
          <button v-for="page in pages" :key="page" @click="setID = page.id" :class="` focus:outline-none w-full text-sm font-semibold rounded px-3 py-2 flex items-center justify-start ${setID === page.id ? 'bg-light text-white' : 'text-lightest'}`">
            <i class="material-icons mr-3">{{ page.icon }}</i>
            <p>{{ page.name }}</p>
          </button>
        </div>
        <div class="mx-5">
          <h1 class="text-xs mb-3 text-lightest tracking-widest uppercase">playlist</h1>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
            <img  src="./assets/19773-add-button-white-clip-art.png" style="width: 25px;height:25px;">
            <p class="mx-3 text-sm text-white font-semibold">Create PlayList</p>
          </button>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
            <img  src="./assets/19773-add-button-white-clip-art.png" style="width: 25px;height:25px;" class="text-lightest">
            <p class="mx-3 text-sm text-white font-semibold">Liked Songs</p>
          </button>
          <div class="h-px w-full bg-light my-3"></div>
        </div>
        <div class="mx-5 my-4">
          <div class="w-full h-6 overflow-y-scroll mb-5">
            <p v-for="album in albums" :key="album" class="text-lightest hover:text-white text-sm py-1">{{ album.name }}</p>
          </div>
          <button class="flex items-center justify-start text-lightest hover:text-white">
            <i class="material-icons mr-3 text-sm rounded-full border border-lightest">arrow_downward</i>
            <p class="text-me font-semibold text-sm">Install Apps</p>
          </button>
        </div>
        <div class="relative pt-4">
          <div class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 p-4 absolute">
            <div class="bg-black rounded-full h-6 w-6">
              <i class="material-icons text-white">keyboard_arrow_down</i>
            </div>
          </div>
          <img src="./assets/avatar7.jpg" alt="">
        </div>
      </div>
      <!-- main content -->
      <div class="w-full relative">

        <!-- header -->
        <div class="w-full sticky top-0 py-4 px-6 flex items-center justify-between" >
          <div class="flex items-center">
            <button class="rounded-full bg-black w-8 h-8 text-white mr-3 focus:outline-none">
              <i class="material-icons text-3xl">keyboard_arrow_left</i>
            </button>
            <button class="rounded-full bg-black w-8 h-8 text-white focus:outline-none">
              <i class="material-icons text-3xl">keyboard_arrow_right</i>
            </button>
          </div>
          <div class="relative">
            <button @click="showDropdown = true" class="bg-light rounded-full py-1 px-2 flex items-center focus:outline-none">
              <img src="./assets/favicon-32x32.png" class="rounded-full h-6 w-6 mr-2">
              <p class="text-white font-semibold text-xs mr-2">Yasser Elsnbary</p>
              <i v-if="showDropdown === false" class="material-icons text-white">arrow_drop_down</i>
              <i v-if="showDropdown === true" class="material-icons text-white">arrow_drop_up</i>
            </button>
            <div v-if="showDropdown === true" class="absolute bg-light w-full rounded mt-1">
              <button @click="showDropdown = false" class="w-full text-sm py-2 text-lightest hover:text-white border-b border-white focus:outline-none">Account</button>
              <button @click="showDropdown = false" class="w-full text-sm py-2 text-lightest hover:text-white border-b border-light focus:outline-none">Log out</button>
            </div>
          </div>
        </div>
        <!-- cards -->
        <div class="px-6 py-3 relative" >
          <div class=" flex items-center justify-between">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Recently Played</h1>
            <h2 class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3">See All</h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="recent in recents" :key="recent" class="p-2 w-48 relative">
              <div class="absolute w-full h-full flex items-end p-8 opacity-0 hover:opacity-100">
                <div class="bg-green rounded-full h-10 w-10 flex items-center justify-center">
                  <i class="material-icons text-white text-2xl">play_arrow</i>
                </div>
              </div>
              <div class="bg-light w-full h-auto p-5 rounded-lg">
                <img src="./assets/avatar7.jpg" class="h-auto w-full shadow mb-2">
                <h1 class="text-sm font-semibold text-white tracking-wide">{{ recent.title }}</h1>
                <h2 class="text-xs text-lightest tracking-wide">{{ recent.artist }}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6 py-3">
          <div class="pl-2">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Made for Stephanie</h1>
            <h2 class="text-sm text-lightest">Get better recommendations the more you listen.</h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="custom in customs" :key="custom" class="p-2 w-48 relative">
              <div class="absolute w-full h-full flex items-end p-8 opacity-0 hover:opacity-100">
                <div class="bg-green rounded-full h-10 w-10 flex items-center justify-center">
                  <i class="material-icons text-white text-2xl">play_arrow</i>
                </div>
              </div>
              <div class="bg-light w-full h-auto p-5 rounded-lg">
                <img src="./assets/avatar7.jpg" class="h-auto w-full shadow mb-2">
                <h1 class="text-sm font-semibold text-white tracking-wide">{{ custom.title }}</h1>
                <h2 class="text-xs text-lightest tracking-wide">{{ custom.artist }}</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- play bar -->
    <div class="w-full flex items-center justify-between px-3 bg-light border-t border-dark py-15" style="height: 16-vh;">
      <div class="flex items-center w-1/4">
        <div>
          <h1 class="text-sm text-white tracking-wide">Summer in the City - Remastered</h1>
          <h1 class="text-xs text-lightest tracking-wide">The Lovin Spoonfull</h1>
        </div>
        <i class="material-icons text-xl text-red-300 mx-4 hover:text-red-600">favorite</i>
        <i class="material-icons text-xl text-lightest hover:text-white">picture_in_picture_alt</i>
      </div>
      <div class="flex flex-col justify-center w-2/4 items-center">
        <div class="flex items-center">
          <button class="mx-5 text-lightest hover:text-green"><i class="material-icons">shuffle</i></button>
          <button class="text-lightest hover:text-green"><i class="material-icons">skip_previous</i></button>
          <button class="rounded-full h-5 w-5 flex items-center justify-center mx-3 border-lightest border text-lightest hover:text-green"><i class="material-icons">play_circle_outline</i></button>
          <button class="text-lightest hover:text-green"><i class="material-icons">skip_next</i></button>
          <button class="mx-5 text-lightest hover:text-green"><i class="material-icons">repeat</i></button>
        </div>
        <div class="w-3/4 flex items-center justify-center mt-3">
          <p class="text-xs text-lightest mr-1">0:28</p>
          <div class="w-full h-1 bg-dark rounded-full mt-4 flex items-center">
            <div class="h-1 rounded-full bg-green" style="width: 30%;">

            </div>
            <div class="h-3 w-3 bg-white rounded-full -ml-1 shadow">

            </div>
          </div>
          <p class="text-xs text-lightest mr-1">2:28</p>
        </div>
      </div>
      <div class="flex items-center w-1/4 justify-end">
        <i class="material-icons text-xl text-lightest hover:text-green">playlist_play</i>
        <i class="material-icons text-xl text-lightest mx-3 hover:text-green">important_devices</i>
        <i class="material-icons text-xl text-lightest hover:text-green">volume_up</i>
        <div class="w-28 ml-3 bg-lightest rounded-full h-1">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      pages: [
        {id: 'home', name: " Home", icon: "home"},
        {id: 'search', name: " Search", icon: "search"},
        {id: 'library', name: " Your Library", icon: "bar_chart"},
      ],
      setID: 'home',
      albums: [
        {name: 'drive'},
        {name: 'zhu'},
        {name: 'All New Indie'},
        {name: 'Mellow'},
        {name: 'Classic Road Trip Songs'},
        {name: 'Lane Del Rey Radio'},
      ],
      showDropdown: false,
      recents: [
        {src: './assets/avatar7.jpg', title: 'Daily Max 2', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Daily Max 2', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Daily Max 2', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Daily Max 2', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Daily Max 2', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Daily Max 2', artist: 'By Spotify'},
      ],
      customs: [
        {src: './assets/avatar7.jpg', title: 'Havana na na', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Havana na na', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Havana na na', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Havana na na', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Havana na na', artist: 'By Spotify'},
        {src: './assets/avatar7.jpg', title: 'Havana na na', artist: 'By Spotify'},
      ],

    };
  },
  
}
</script>

<style lang="scss">

</style>
