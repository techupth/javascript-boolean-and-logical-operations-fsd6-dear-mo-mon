// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

lastMonthPaidMoreThan4000 = 4001;
isWeekday = Boolean(1);
hasBoughtProductFromITCategory = Boolean(0);
hasAttendedDiscountEvent = 2;
isPlatinum = Boolean(0);

hasPromotion =
  (lastMonthPaidMoreThan4000 >= 4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    hasAttendedDiscountEvent >= 1) ||
  isPlatinum;

console.log(hasPromotion);
