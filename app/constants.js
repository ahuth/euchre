"use strict";

export const actionTypes = {
  ORDER_UP_ACCEPT: "order_up_accept",
  HANDS_DEAL: "hands_deal",
  ORDER_UP_PASS: "order_up_pass",
  ORDER_UP_PASS_FINAL: "order_up_pass_final"
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
