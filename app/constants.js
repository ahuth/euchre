"use strict";

export const actionTypes = {
  ACCEPT_ORDER_UP: "order_up_accept",
  DEAL_HANDS: "hands_deal",
  PASS_ORDER_UP: "order_up_pass",
  PASS_ORDER_UP_FINAL: "order_up_pass_final"
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
