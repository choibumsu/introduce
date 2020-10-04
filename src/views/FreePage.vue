<template>
  <div id="free-page" class="">
    <div class="page p-50">
      <div class="flex gap-10 p-10">
        <div class="w-120 h-120 bg-orange box"></div>
        <div class="w-120 h-120 bg-green circle"></div>
        <img class="w-120 h-120" src="../assets/img/instagram.svg" />
      </div>
      <div class="flex center w-120 h-120 p-10 b-black-1 m-10">박스 크기</div>
    </div>
    <div class="page p-20">
      <div class="w-800 h-300 bg-green"></div>
      <div class="flex">
        <div class="w-550 h-400 bg-orange"></div>
        <div class="w-250 h-400 bg-orangered"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss">
.page {
  height: 100vh;
}

.flex {
  display: flex;

  &.center {
    align-items: center;
    justify-content: center;
  }
}

.gap- {
  &10 {
    gap: 10px;
  }
}

.p- {
  &10 {
    padding: 10px;
  }

  &20 {
    padding: 20px;
  }

  &50 {
    padding: 50px;
  }
}

.b- {
  &black- {
    &1 {
      border: 1px solid black;
    }
  }
}

.m- {
  &10 {
    margin: 10px;
  }
}

.w- {
  &120 {
    width: 120px;
  }

  &250 {
    width: 250px;
  }

  &550 {
    width: 550px;
  }

  &800 {
    width: 800px;
  }
}

.h- {
  &120 {
    height: 120px;
  }

  &300 {
    height: 300px;
  }

  &400 {
    height: 400px;
  }
}

.bg- {
  &orange {
    background-color: orange;
  }

  &green {
    background-color: green;
  }

  &orangered {
    background-color: orangered;
  }
}

.circle {
  border-radius: 50%;
}
</style>
