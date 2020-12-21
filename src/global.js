import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .nav{
  	background: ${({ theme }) => theme.navBar};
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.navShadow};
  }
  .navBtn{
  	background: ${({ theme }) => theme.navBar};
    color: ${({ theme }) => theme.text};
  }
  .searchBar{
  	background: ${({ theme }) => theme.navBar};
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.navShadow};
  }
  .searchInput{
  	background: ${({ theme }) => theme.navBar};
    color: ${({ theme }) => theme.text};
  }
  .menuBtn{
  	background: ${({ theme }) => theme.navBar};
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.navShadow};
  }
  .menu{
  	box-shadow: 0px 0px 10px ${({ theme }) => theme.navShadow};
  }
  .menu > button{
  	background: ${({ theme }) => theme.navBar};
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 0px 2px ${({ theme }) => theme.navShadow};
  }
  .card{
  	background: ${({ theme }) => theme.navBar};
  	box-shadow: 0px 0px 10px ${({ theme }) => theme.navShadow};
  }
`;