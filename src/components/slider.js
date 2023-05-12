import React from 'react';
import { Spring } from 'react-spring';

export default function Slider() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -5000 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1style}>
            <h1>Hi there</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat numquam, nulla nostrum, officia soluta inventore repellendus, eaque nihil sed voluptas ea? Deserunt iure, suscipit exercitationem earum aliquam iusto nihil nulla!
         </p>
          </div>
        </div>
      )}
    </Spring>

  )
}

const c1style = {
  background: 'steelblue',
  color: 'white',
  padding: '0.5rem'
}
