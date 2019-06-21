# PRESENTATION TABLE ELEMENT CONCEPT

This is the documentation of the process it experienced during the making of this component

## Prerequisites

For the making of this element it had to be necessary to read the following documentation due the fabric-react-ui library has isolated components and styles for configurations of each one need.

1. [Using Office UI Fabric Core and Fabric React in SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/office-ui-fabric-integration) this is the basic use of the styles with fabric-react using sass when not has inner complex configuration and also for reuse in custom components.


## Getting Started


1. creation of functional stateless pure component for custom component.

```
import * as React from 'react';
import styles from './**.module.scss';

interface IComponentProps {
  /** For TSDoc need */
  exampleProp: TypeProp
}

function ExampleComponent({ anyprop }:IComponentProps) {

  return (
  <div>
    HELLO WORLD
  </div>
  )
}

export default ExampleComponent

```

2. For the use you can do like.

```
<ExampleComponent props={...props} />
```

In the module.scss
```
/** is important to have this import which has the access for the standart fabric react styles */
@import '~office-ui-fabric-react/dist/sass/References';

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

//
// Office UI Fabric
// --------------------------------------------------
// Variables and mixins that can be referenced without outputting any CSS.

// Variables
@import './variables/Animation.Variables';
@import './variables/BrandIcon.Variables';
@import './variables/Color.Variables';
@import './variables/Font.Variables';
@import './variables/General.Variables';
@import './variables/Icon.Variables';
@import './variables/Responsive.Variables';
@import './variables/ZIndex.Variables';

// Mixins
@import './mixins/Animation.Mixins';
@import './mixins/BrandIcon.Mixins';
@import './mixins/Color.Mixins';
@import './mixins/Directionality.Mixins';
@import './mixins/Font.Mixins';
@import './mixins/Grid.Mixins';
@import './mixins/Icon.Mixins';
@import './mixins/General.Mixins';
@import './mixins/Responsive.Mixins';
```

