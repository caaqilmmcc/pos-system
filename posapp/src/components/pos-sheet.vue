<template>
  <div class="  flex-col bg-background h-[calc(100vh-89px)] items-start gap-8 ">
    <div class="flex flex-col justify-between w-full h-full gap-6">
      <SelectCustomer/>
      <PosCart />
      <div>
        <PaymentSummaryCart />
      </div>
      <Button>Continue</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import PosCart from "@/components/pos-cart.vue";
import PaymentSummaryCart from "@/components/payment-summary-cart.vue";
import SelectCustomer from "@/components/selectCustomer.vue";
import { Button } from "@/components/ui/button";
</script>
