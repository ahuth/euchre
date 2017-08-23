import React from "react"
import OrderUp from "../containers/order-up"
import {Phase} from "../types"

export default function App({phase}) {
  switch (phase) {
    case Phase.orderUp:
      return <OrderUp />;
      break;
  }
}
