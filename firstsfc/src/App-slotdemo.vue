<template>
  <slotdemo>
    <template v-slot:headline>Det er en overskrift</template>
    <button>En knap</button>
    <p>Her er almindelig tekst.</p>
    <template v-slot:footer>Og så kommer fodnoten</template>
    <template v-slot:dato="{ dato }">
    <p>Klokken er {{ dato }} hos komponenten</p>
  </template>
  </slotdemo>  
</template>