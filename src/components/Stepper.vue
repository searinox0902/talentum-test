

<template>
    <div class="grid grid-cols-1">
      <div class="mx-auto w-full sm:w-2/3">
        <ul class="stepper flex justify-between" data-mdb-stepper="stepper">
          <li class="stepper-step flex gap-2 items-center" v-for="(step, index) in steps" v-bind:key="index">
            <div class="flex justify-center flex-col items-center">
              <div class="stepper-number">{{index+1}}</div>
              <div class="stepper-desc">{{step}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>



<script>
    export default {
        data(){
            return {
                steps : ['Basic Details', 'Contact Details', 'Verifications']
            }
        }
    }
</script>