/*
Styles for the component
*/

import { css } from '@emotion/react'
import theme from 'root/src/styles/theme'
import { rgba } from 'polished'

export const vars = {
  menuWidth: '235px',
}

export default {
  MobileNav: css`
    padding: 14px 26px;
    &:before {
      content: '';
      background-color: #222;
      width: 100%;
      height: 58px;
      position: absolute;
      top: 0;
      right: 0;
    }
    ._toggler {
      border-color: #222;
      background-color: #333;
      outline: none;
      padding: 4px 10px;
      font-size: 14px;
      border-radius: 3px;
      position: relative;
      display: block;
      color: ${rgba('#fff', 0.8)};
      line-height: 20px;
      font-weight: 300;
      letter-spacing: 1px;
    }
    ._menu {
      width: 200px;
      background-color: #222;
      z-index: 2;
      position: relative;
      padding: 8px 20px;
      top: 8px;
      .nav-link {
        color: ${rgba('#fff', 0.6)};
        font-weight: 400;
        font-size: 14px;
        padding: 7px 0;
        cursor: pointer;
        margin-top: auto;
        &:hover,
        &:focus {
          color: #fff;
        }
      }
    }
  `,
  Sidebar: css`
    ._wrapper {
      background-color: #111;
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: ${vars.menuWidth};
      z-index: 999;
      flex-wrap: wrap;
      .simplebar-content-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      .simplebar-track {
        .simplebar-scrollbar {
          &:before {
            background: #fff;
          }

          &.simplebar-visible:before {
            opacity: 0.5;
          }
        }

        &.simplebar-vertical {
          width: 10px;

          .simplebar-scrollbar {
            height: auto;
          }
        }

        &.simplebar-horizontal {
          height: 10px;

          .simplebar-scrollbar {
            width: auto;
          }
        }
      }
      ._header {
        padding-top: 24px;
        padding-bottom: 60px;
        text-align: center;
      }
      ._avatar {
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #484848 !important;
        margin-bottom: 16px !important;
      }
      ._name {
        display: block;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 8px;
      }
      ._status {
        color: #8a8a8a;
        line-height: 100%;
        margin-top: 9px;
        display: block;
        margin-bottom: 0;
        font-size: 14px;
      }
      ._menu {
        padding-bottom: 24px;
      }
      ._list {
        margin-bottom: 0;
        text-align: center;
        line-height: 100%;
        a:not(:last-child) {
          margin-bottom: 28px;
        }
        .nav-link {
          &.--active {
            color: ${theme().primary}!important;
          }
          color: ${rgba('#e8e8e8', 0.95)}!important;
          font-size: 16px;
          letter-spacing: 0.5px;
          line-height: 100%;
          padding: 0;
          cursor: pointer;
        }
      }
    }
  `,
}
