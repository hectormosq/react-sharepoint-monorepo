# MENU LIST ELEMENT CONCEPT

This is the documentation of the process it experienced during the making of this component

## Prerequisites

For the making of this element it had to be necessary to read the following documentation due the fabric-react-ui library has isolated components and the configurations of each one need.

1. [Office UI Fabric Website](https://developer.microsoft.com/en-us/fabric) this is for components usage and source code.

2. [Office UI Fabric Component Github](https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components) this is for the inner configuration of each component source.


## Getting Started


1. creation of functional stateless wrapper to the UIComponent.

```
import * as React from 'react';
import { Components** } from 'office-ui-fabric-react/lib/**';
import { **Styles } from './**.styles.ts';

interface IComponentProps {
  /** For TSDoc need */
  exampleProp: TypeProp
}

function ExampleWrapper({ anyprop }:IComponentProps) {

  return (
  <div>
   <ExampleUIComponent  xProp={**}/>
  </div>
  )
}

export default ExampleWrapper

```

2. creation of **.styles.ts for the edit of the css of the UIComponent whic is based Office UI Fabric Component Github web the structure is based in the following  [link](https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/office-ui-fabric-react/src/components/Nav/Nav.styles.ts), also is important to declare in each styles the following imports.

```
import { DefaultPalette, } from '@uifabric/styling';
import { I**COMPONENT**StyleProps } from 'office-ui-fabric-react/lib/**COMPONENT**';
```
      DefaultPalette is for the colors code and the other is por the Styleprops which you can handle selectors and other properties of the css.
