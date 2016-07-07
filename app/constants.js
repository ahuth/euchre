"use strict";

export const actionTypes = {
  ACCEPT_ORDER_UP: "accept_order_up",
  DEAL_HANDS: "deal_hands",
  PASS_ORDER_UP: "pass_order_up",
  PASS_ORDER_UP_FINAL: "pass_order_up_final"
};

export const phases = {
  ORDER_UP: "order_up",
  PICK_TRUMP: "pick_trump",
  TRICK_WINNING: "trick_winning"
};

export const positions = {
  NORTH: "north",
  SOUTH: "south",
  EAST: "east",
  WEST: "west"
};
