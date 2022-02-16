<script setup>
</script>

<template>
  <div class="px-8 mt-4  sm:container sm:w-3/4 sm:px-6 md:mx-auto">
    <div class="grid grid-cols-1 mb-4">
      <p class="text-right font-bold">
        Already a Member?
        <a href="#" class="text-orange">Sing in</a>
      </p>
    </div>

    <!-- ============ STEPPER ============ -->

    <div class="grid grid-cols-1">
      <div class="mx-auto w-full">
        <ul class="stepper flex justify-between" data-mdb-stepper="stepper">
          <li class="stepper-step active flex gap-2 items-center">
            <div class="flex justify-center flex-col items-center">
              <div class="stepper-number">1</div>
              <div class="stepper-desc">Basic Details</div>
            </div>
          </li>
          <li class="stepper-step flex items-center items-center active">
            <div class="flex justify-center flex-col items-center">
              <div class="stepper-number">2</div>
              <div class="stepper-desc">Contact Details</div>
            </div>
          </li>
          <li
            class="stepper-step flex items-center stepper-active items-center"
          >
            <div class="flex justify-center flex-col items-center">
              <div class="stepper-number">3</div>
              <div class="stepper-desc">Verifications</div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- ============ STEPPER ============ -->

    <div class="grid w-full mx-auto mt-8 mb-20">
      <form
        id="app"
        @submit="checkForm"
        action="https://vuejs.org/"
        method="post"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 ">
          <div>
            <h2 class="title">Basic Details</h2>

            <label class="block">
              <p class="mb-2 mt-4">Full name</p>
              <input
                type="text"
                class="
                  form-input
                  mt-1
                  block
                  w-full
                  rounded-full
                  backdrop-blur-sm
                  border-custom-orange-50
                  shadow-sm shadow-gray-200
                "
                placeholder="Enter Fullname"
              />
            </label>
          </div>

          <div class="flex justify-center items-center flex-col my-6 sm:my-0">
            <button
              class="
                w-20
                h-20
                rounded-full
                bg-custom-orange
                flex
                justify-center
                items-center
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <p class="font-bold mt-2">Add Photo</p>
            <input class="hidden" type="file" value="" />
          </div>
        </div>

        <div class="grid grid-cols-1">
          <label class="block">
            <p class="mb-2 mt-4">Constituency</p>
            <input
              type="search"
              class="input-gray"
              placeholder="Search Constituency"
            />
          </label>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <label class="block">
            <p class="mb-2 mt-4">Select Party You Work For</p>
            <select
              name="select"
              class="
               input-gray
              "
            >
              <option value="value1" selected>- Select you car -</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </label>
          <label class="block">
            <p class="mb-2 mt-4">Position</p>
            <select
              name="select"
              class="
               input-gray
              "
            >
              <option value="value1" selected>- Select -</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </label>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <label class="block relative">
            <p class="mb-2 mt-4">Constituency</p>
            <input
              type="date"
              class="
               input-gray
              "
              placeholder="Enter Fullname"
            />
          </label>
          <div class="mt-2">
            <p class="mb-2 mt-4">Gender</p>
            <div class="grid grid-cols-1 sm:grid-cols-2">
              <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio"
                name="accountType"
                value="personal"
              />
              <span class="ml-2 text-custom-placeholder-gray">Personal</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio"
                name="accountType"
                value="busines"
              />
              <span class="ml-2 text-custom-placeholder-gray">Business</span>
            </label>
            </div>
            
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 mb-6">
          <label class="block relative">
            <p class="mb-2 mt-4">Vision & Vision</p>
            <input
              type="textarea"
              class="
               input-gray-textarea
              "
              placeholder="Type here..."
            />
          </label>
        </div>

        <!-- ====== Education ===== !--->

        <div class="grid">
          <div>
            <div class="flex items-center justify-between my-2">
              <h2 class="title">Education</h2>
              <button class="text-orange">
                + Add Another Education
              </button>
            </div>

            <div
              class="panel-gray"
            >
              <label class="block relative w-full sm:w-auto " for="degree">
                <p class="mb-2 mt-1">Degree</p>
                <input
                  type="Text"
                  if="degree"
                  class="
                    form-input
                    mt-1
                    block
                    w-full
                    rounded-full
                    backdrop-blur-sm
                    placeholder-custom-placeholder-gray
                    text-custom-placeholder-gray
                    border-gray-200 border-2
                  "
                  placeholder="Enter Degree"
                />
              </label>
              <label class="block relative w-full sm:w-auto ">
                <p class="mb-2 mt-1">College/University</p>
                <input
                  type="text"
                  class="
                    form-input
                    mt-1
                    block
                    w-full
                    rounded-full
                    backdrop-blur-sm
                    placeholder-custom-placeholder-gray
                    text-custom-placeholder-gray
                    border-gray-200 border-2
                  "
                  placeholder="Enter College/University"
                />
              </label>
              <label class="block relative w-full sm:w-auto ">
                <p class="mb-2 mt-1">Graduation Year</p>
                <input
                  type="date"
                  class="
                    form-input
                    mt-1
                    block
                    w-full
                    rounded-full
                    backdrop-blur-sm
                    placeholder-custom-placeholder-gray
                    text-custom-placeholder-gray
                    border-gray-200 border-2
                  "
                  placeholder="Enter Fullname"
                />
              </label>
            </div>

            <div class="flex items-center justify-end my-6">
              <button class="mx-4">Cancel</button>
              <button
                class="py-1 px-3 text-white bg-custom-orange rounded-full"
              >
                Save
              </button>
            </div>
          </div>

          <div class="flex gap-4 flex-col sm:flex-row">
            <div
              class="
                grow
                grid grid-cols  sm:grid-cols-3
                gap-4
                panel-gray
              "
            >
              <div>
                <h3 class="text-gray-500 text-sm">Degree</h3>
                <p class="font-bold text-md">DegreeName</p>
              </div>

              <div>
                <h3 class="text-gray-500 text-sm">College/University</h3>
                <p class="font-bold text-md">Collage name appears here</p>
              </div>

              <div>
                <h3 class="text-gray-500 text-sm">Graduation Year</h3>
                <p class="font-bold text-md">1999</p>
              </div>
            </div>

            <div
              class="
                bg-custom-gray
                rounded-2xl
                px-4
                py-2
                sm:p-2

                flex flex-row  sm:flex-col
                justify-between
              "
            >
              <button class="m-1 w-10 sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
                </svg>
              </button>

              <button class="m-1 w-10 sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="flex gap-4 my-10 justify-center">
              <button
                class="py-2 px-4 text-white bg-custom-orange rounded-full"
              >
                Save & Continue
              </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
@import "./assets/base.css";
</style>
