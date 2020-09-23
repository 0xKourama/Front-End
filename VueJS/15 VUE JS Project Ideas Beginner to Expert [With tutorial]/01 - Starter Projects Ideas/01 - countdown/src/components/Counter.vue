<template>
  <div v-if="loaded">
    <section class="text-3xl flex justify-center content-cetnter flex-column mx-auto text-center"></section>
    <h5 v-if="!expired">Buy Now</h5>
    <h5 v-else>Timer Is Done</h5>
    <section class="flex text-6xl justify-center content-center">
        <!-- days counter -->
      <div class="days mr-2 relative">
        {{ displayDays }}
        <div class="label text-sm absolute bottom-0">days</div>
      </div>
      <span class="leading-snug">:</span>
      <!-- hours counter -->
      <div class="hours mx-2 relative">
        {{ displayHours }}
        <div class="label text-sm absolute bottom-0">hours</div>
      </div>
      <span class="leading-snug">:</span>
      <!-- minutes counter -->
      <div class="minutes mx-2 relative">
        {{ displayMinutes }}
        <div class="label text-sm absolute bottom-0">minutes</div>
      </div>
      <span class="leading-snug">:</span>
      <!-- seconds counter -->
      <div class="seconds ml-2 relative">
        {{ displaySeconds }}
        <div class="label text-sm absolute bottom-0">seconds</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
    //   when load your website
      loaded: false,
    //   when time expired
      expired: false, 
    };
  },
  computed: {
    _seconds: () => 1000, // second
    _minutes() {
      return this._seconds * 60; // 60 *1000 = minute
    },
    _hours() {
      return this._minutes * 60; // miuntes * 60 = hour
    },
    _days() {
      return this._hours * 24; // hours * 24 = day
    }
  },
  mounted() {
    this.showRemaining(); // run your main function that hold all logic
  },
  methods: {
    formatNum: num => (num < 10 ? "0" + num : num), // global function to add 0

    showRemaining() {
      const timer = setInterval(() => {
        // current time
        const now = new Date();     
        // future time 
        const end = new Date(2021, 6, 3, 3, 55, 0, 0); // year,month,day,hours,minutes,seconds,milleseconds 
        // change the date to check your condition
        const distance = end.getTime() - now.getTime();
        // condition when the end of the timer
        if (distance <= 0) {
          this.expired = true;
          this.loaded = true;
          clearInterval(timer);
          return;
        }

        // calculate the time for days, hours, minuts and seconds
        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        //  assign value of counter vectors
        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.seconds {
  max-width: 60px;
}
</style>
