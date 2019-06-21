import { INavStyleProps } from 'office-ui-fabric-react/lib/Nav';
import loadTheme from '../../styles/_colorsPalette.styles';

export const MenuListStyles = (props: INavStyleProps) => {

  const {
    isSelected
  } = props;

  return {
    root: [
      {
        margin: '0',
        width: 'auto'
      }
    ],
    navItems: [
      {
        margin: '0'
      }
    ],
    chevronIcon: [
      {
        color: loadTheme.palette.themePrimary,
      }
    ],
    link: [
      {
        color: loadTheme.palette.black,
        selectors: {
          '.ms-Nav-compositeLink:hover &': {
            backgroundColor: loadTheme.palette.neutralQuaternaryAlt,
            borderLeft: `0.1rem solid ${loadTheme.palette.themePrimary}`
          }
        }
      },
      isSelected && {
        selectors: {
          '&:after': {
            borderLeft: `0.1rem solid ${loadTheme.palette.themePrimary}`
          }
        }
      }
    ],
    chevronButton: [
      {
        marginLeft: '0.2rem',
        selectors: {
          '.ms-Nav-compositeLink:hover &': {
            backgroundColor: loadTheme.palette.neutralQuaternaryAlt,
          }
        }
      },
      isSelected && {
        selectors: {
          '&:after': {
            borderLeft: 'none'
          }
        }
      }
    ]
  }
}
