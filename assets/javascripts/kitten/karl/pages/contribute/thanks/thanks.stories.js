import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { css } from 'styled-components'

import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'

import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'

import { TextInput } from '../../../../components/form/text-input'
import { Button } from '../../../../components/buttons/button'

import { FacebookIconWithBackground } from '../../../../components/icons/facebook-icon-with-background'
import { TwitterIcon } from '../../../../components/icons/twitter-icon'
import { EmailIcon } from '../../../../components/icons/email-icon'

import ProjectsCarousel from '../../common/projects-carousel'

const FlexTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    margin: 0 0 0 ${pxToRem(40)};
    line-height: ${pxToRem(43)};
    font-size: ${pxToRem(36)};
  }

  @media screen and (max-width: ${ScreenConfig.XXS.max}px) {
    flex-direction: column;

    h1 {
      margin: ${pxToRem(20)} 0 0 0;
      text-align: center;
      line-height: ${pxToRem(29)};
      font-size: ${pxToRem(24)};
    }
  }
`
const FlexButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  > a {
    margin-bottom: ${pxToRem(20)};
  }
  }

  @media screen and (min-width: ${ScreenConfig.XS.min}px) {
    max-width: ${pxToRem(325)};
  }
`

/* `&&&` is used to increase specificity */
const NoPaddingLeft = css`
  &&& {
    padding-left: 0;
  }
`

const FacebookIconWithBackgroundNoPadding = styled(FacebookIconWithBackground)`
  ${NoPaddingLeft}
`
const TwitterIconNoPadding = styled(TwitterIcon)`
  ${NoPaddingLeft}
`
const EmailIconNoPadding = styled(EmailIcon)`
  ${NoPaddingLeft}
`

const PageSubTitles = styled(Text)`
  font-size: ${pxToRem(20)};
  margin: 0;
`

const PageIntroText = styled(Text)`
  font-size: ${pxToRem(14)};
  @media screen and (min-width: ${ScreenConfig.XS.min}px) {
    font-size: ${pxToRem(16)};
  }
`

const RocketIllustration = () => (
  <svg
    width="95"
    height="95"
    viewBox="0 0 95 95"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <mask id="b" fill="#fff">
        <circle cx="47.5" cy="47.5" r="47.5" />
      </mask>
      <circle cx="47.5" cy="47.5" r="47.5" fill="#caf4fe" />
      <g mask="url(#b)">
        <g fill-rule="nonzero">
          <path
            d="M52.204267 64.751806v13.790506c3.595572-4.18937 11.42751-1.9226 10.490051 5.221878 3.631172-3.762126 15.046816 0 11.035914 10.657379l-23.756881.130547H18.811728c0-8.022704 6.26555-10.657379 10.656183-9.529928 2.551314-5.37616 9.718724-7.31063 13.872025-2.8839V64.751805"
            fill="#e8f8ff"
          />
          <path
            fill="#83dafc"
            d="M43.909532 64.763674h.41533v11.713622h-.41533zM45.36912 70.816306h1v10.562435h-1zM46.852442 64.348298h1v9.96904h-1zM46.828709 76.987616h.41533v8.485552h-.41533zM48.312031 67.861197h1v13.232714h-1zM49.759753 65.891125h1v8.604231h-1zM51.219341 67.861197h.41533v9.838494h-.41533zM60.344737 80.061404c-.593329-.9613-1.530788-1.637771-2.622513-1.898865-1.103592-.261094-2.230916-.071207-3.203975.522188l-.237332-.391641c2.207183-1.36481 5.102627-.67647 6.455417 1.53096l-.391597.237358zM42.31941 83.65738c-.889992-1.70898-2.812377-2.599072-4.699163-2.171828l-.106799-.45098c2.07665-.474716 4.2245.522188 5.19756 2.409185l-.391597.213622z"
          />
        </g>
        <g transform="translate(42.667241 24.244926)">
          <mask id="d" fill="#fff">
            <path d="M.696429.405229H9.56076V40.50688H.696429z" />
          </mask>
          <path
            d="M.696429.405229H9.56076V40.50688H.696429z"
            fill="#ffebe0"
            fill-rule="nonzero"
          />
          <g mask="url(#d)">
            <g transform="translate(-.846226 -1.849673)">
              <path
                d="M.011867 13.944788c0-1.934468 11.890307-7.559855 11.890307-9.446852V.296698c0 1.886997-11.890307 7.346233-11.890307 9.446852v4.201238zM.011867 22.643963c0-1.934469 11.890307-7.559856 11.890307-9.446853V8.995872c0 1.886997-11.890307 7.346233-11.890307 9.446853v4.201238zM.011867 31.343137c0-1.934468 11.890307-7.559855 11.890307-9.446852v-4.201239c0 1.886997-11.890307 7.346234-11.890307 9.446853v4.201238zM.011867 40.05418c0-1.934469 11.890307-7.559856 11.890307-9.446853V26.40609c0 1.886997-11.890307 7.346233-11.890307 9.446852v4.201239z"
                fill="red"
                fill-rule="nonzero"
              />
              <path
                d="M.011867 48.753354c0-1.934469 11.890307-7.559856 11.890307-9.446852v-4.201239c0 1.886997-11.890307 7.346233-11.890307 9.446853v4.201238z"
                fill="#ff2600"
                fill-rule="nonzero"
              />
              <ellipse
                fill="#000"
                cx="2.171583"
                cy="2.171827"
                rx="2.135983"
                ry="2.136223"
                opacity=".1"
                transform="translate(4.034635 10.918473)"
              />
              <ellipse
                stroke="#F8E5DC"
                stroke-width=".825225"
                fill="#101054"
                cx="5.980753"
                cy="12.579979"
                rx="2.135983"
                ry="2.136223"
              />
              <ellipse
                fill="#000"
                cx="2.171583"
                cy="2.148091"
                rx="2.135983"
                ry="2.136223"
                opacity=".1"
                transform="translate(4.034635 23.973168)"
              />
              <ellipse
                stroke="#F8E5DC"
                stroke-width=".825225"
                fill="#101054"
                cx="5.980753"
                cy="25.622807"
                rx="2.135983"
                ry="2.136223"
              />
            </g>
          </g>
        </g>
        <g fill-rule="nonzero">
          <path
            fill="red"
            d="M47.801768 7.85707l-4.414366 16.793085h8.816865z"
          />
          <path
            d="M47.801767 7.85707l2.90731 16.793085h1.49519z"
            opacity=".1"
            fill="#000"
          />
        </g>
        <path
          d="M48.668028 24.650155h3.085309v40.101651h-3.085309z"
          opacity=".1"
          fill="#000"
          fill-rule="nonzero"
        />
        <g fill-rule="nonzero">
          <path
            d="M66.194958 45.264706c-1.127325.688339-1.447722 2.705883-1.886786 4.65222-.439063 1.946336-.439063 3.144994-1.69692 3.39422-1.257857.249226-1.827452.379773-1.507055 1.068111.320398.688339.818794 1.127451.628929 2.076884-.189865.949432-.189865 1.317337.818793 1.946336 1.00866.629.498397 1.198659-.130532 1.317338-.628928.130547-.996792.249226-1.032392 1.69711-.0356 1.447885-.735727 2.32611 1.910519 3.465428 2.646246 1.127451 6.040086 2.515996 4.782229 6.669763-1.257857 4.153767-2.705579 5.910217-2.705579 5.910217 3.025976 1.507224 8.745665 3.465428 17.1828.688338-1.31719-1.827657-3.773571-4.53354-3.203976-11.143963.569596-6.610423-1.756253-12.022187-1.756253-12.022187l-2.325848-6.91899-7.428476-4.094426-1.649453 1.293601z"
            fill="#724a44"
          />
          <path
            d="M82.60643 78.21001c-1.31719-1.827657-3.773571-4.533539-3.203976-11.143962.0356-.427245.059333-.85449.0712-1.281734l-.771327-.854489-3.39384.925697c.427196 1.151186.498396 2.729618-.889993 5.815273-1.38839 3.085655-1.067992 5.755934 0 7.939628 2.373314 0 5.09076-.379772 8.187936-1.400412zM65.435497 50.106812c.498396-1.637771.818794-3.026316 1.957985-4.604748l-.52213-.759546-.676394.522188c-1.127325.688339-1.447722 2.705883-1.886786 4.65222-.439063 1.946336-.439063 3.144994-1.69692 3.39422-1.257857.249226-1.827452.379773-1.507055 1.068111.083066.189887.189866.367905.284798.534056-.023733-1.032508-.284798-.534056 1.66132-1.044376 1.946119-.486584 1.886786-2.124355 2.385182-3.762125z"
            fill="#000"
            opacity=".1"
          />
          <path
            d="M90.414635 83.467493c-6.040086-3.465429-5.601023-3.026316-7.867538-5.281218-8.437134 2.765222-14.156823.818885-17.1828-.688339-2.07665 4.4742-13.148164 7.013932-13.148164 14.656863v3.216202h43.419795c.011866-.011867.83066-8.449948-5.221293-11.903508z"
            fill="#83dafc"
          />
          <path
            d="M95.647794 95.359134s.818794-8.438081-5.221292-11.891641c-6.040086-3.465429-5.601023-3.026316-7.867539-5.281218-2.788645.913829-5.292492 1.317337-7.487808 1.388545-1.115458 1.768318-2.159716 3.358617-4.912762 4.426728-2.753045 1.068112-4.402499 2.527864-4.022768 7.25129.37973 4.723427-1.507055 4.118163-1.507055 4.118163h31.019224v-.011867z"
            fill="#000"
            opacity=".1"
          />
          <path
            d="M85.13401 50.925697c-2.25465-2.20743-2.337715-4.272446-3.01411-6.076367.023733.071207.047466.130547.0712.201754-.023734-.071207-.047467-.130547-.0712-.201754-.011867-.023736-.011867-.035604-.023733-.05934-.023733-.047472-.0356-.106811-.059333-.154283-.011867-.023735-.011867-.035603-.023733-.05934 0-.011867-.011867-.023735-.011867-.035603 0 .011868.011867.023736.011867.035604l-.177999-.391641c.0356.05934.059333.130547.094933.189886-.0356-.071207-.059333-.130547-.094933-.201754-.011866-.023736-.023733-.035604-.023733-.05934-.023733-.047471-.047466-.094943-.083066-.142414-.011867-.023736-.023733-.035604-.0356-.05934-.011866-.011868-.011866-.023736-.023733-.035604.011867.011868.011867.023736.023733.035604-.0712-.130547-.154265-.249226-.237331-.379773.083066.11868.154265.22549.225465.34417-.0712-.11868-.1424-.237359-.225465-.34417-.011867-.023736-.023733-.035604-.0356-.05934l-.106799-.142414c-.011867-.023736-.023733-.035604-.047466-.05934-.047467-.05934-.094933-.118679-.154266-.178018-.047466-.047472-.094932-.106811-.130532-.154283l-.047466-.047472c-.0356-.035603-.059333-.071207-.094933-.094943l-.023733-.023736.023733.023736c-.011867-.011868-.0356-.023736-.047466-.047472l.023733.023736-.023733-.023736c-.0356-.035603-.0712-.05934-.094933-.094943l-.0356-.035604c-.0356-.035603-.083066-.071207-.118665-.10681l-.011867-.011869c-.094932-.083075-.189865-.142414-.284798-.213622h-.011866c-.047467-.023736-.094933-.05934-.130533-.083075 0 0-.011866 0-.011866-.011868l-.142399-.071208c-.783194-.403508-1.578254-.403508-2.52758-.415376-.1424 0-.296665 0-.45093-.011868h-.047466c-.498396-.011868-1.044259-.023736-1.637588-.071208-1.827452-.16615-4.058368-.818885-6.360483-3.643446-3.08531-3.773994-6.123152-1.447885-6.799547 0-.676395 1.447884-2.397048 5.981424 4.093968 7.239422 2.515714.498452 3.46504.56966 3.46504 2.20743s-1.946119 6.17131 1.827452 6.040764c3.39384-.759546 4.212634.878225 3.77357 2.32611-.439063 1.447883-.949326 2.705881-1.388389 4.094426-.439063 1.388545-1.31719 5.352425 2.325849 6.23065 0 0 .628928.178019 1.364656.391641h.023733c.059333.011868.118666.035604.177999.047472.023733.011868.047466.011868.059332.011868.0712.023736.130533.035604.201732.05934.498396.142414.984926.272961 1.31719.367904.949326.249226 2.207183 0 2.207183-2.326109 0-2.32611.37973-5.1032 2.646246-6.23065 2.230916-1.091847 3.939702-4.557276.913726-7.512384zm-6.51475-6.242518c.094933.142415.178.296698.261065.45098-.083066-.154282-.166132-.308565-.261064-.45098zm-1.66132-2.94324c.154266 0 .308531.011867.45093.011867-.154265-.011868-.296664-.011868-.45093-.011868zm2.25465 17.433952c-1.079859 2.076883-2.25465 3.263674-2.266516 4.996388 0 .22549.023733.462848.059333.712074-.047467-.249226-.059333-.486584-.059333-.712074.011866-1.744582 1.186657-2.919505 2.266515-4.996388.569596-1.07998.711995-1.886997.617062-2.539732.1068.652735-.047466 1.447885-.617062 2.539732zm2.195316-15.677503l-.1068-.142414.1068.142414zm-.723862-.807017zm-.166132-.142415l-.011866-.011868.011867.011868zm-.439063-.308566s-.011866 0 0 0c-.011866 0 0 0 0 0zm.842527.688339l.047466.047472c-.011866-.023736-.023733-.035604-.047466-.047472zm.177999.189886s.011866 0 0 0c.059333.05934.106799.11868.154265.178019-.047466-.047472-.094933-.118679-.154265-.178019.011866 0 0 0 0 0zm.996792 1.673375c-.023733-.047472-.0356-.094943-.059333-.154283.011867.05934.0356.106811.059333.154283zm-.296664-.664603c-.023734-.047471-.047467-.094943-.083066-.142414.023733.047471.047466.094943.083066.142414z"
            fill="#002f7d"
          />
          <path
            d="M85.13401 50.925697c-3.025977-2.955108-2.135984-5.66099-4.022769-7.809082-1.31719-1.507223-2.515714-1.341073-4.1533-1.388544-.510263-.011868-1.079859-.011868-1.69692-.071208 1.946117 1.269866 4.331299 2.966976 4.402498 6.562952 0 1.317337-.37973 2.26677-1.257857 2.836429-.878126.56966-1.756253 1.578431-.439063 2.955108 1.31719 1.376677 2.764912 2.26677 1.257857 5.162539-1.507055 2.895769-3.192109 4.046956-1.66132 7.369969.628928.178019 1.340922.379773 1.779986.498452.949326.249226 2.207182 0 2.207182-2.32611 0-2.326109.37973-5.103198 2.646247-6.23065 2.254649-1.139318 3.963435-4.604747.937459-7.559855z"
            fill="#002057"
          />
        </g>
        <g fill-rule="nonzero">
          <path
            d="M25.635008 68.881837c1.73252 4.153767 9.35086 7.073272 11.42751 7.998968 2.07665.925697 4.948362 2.49226 5.16196 9.019608.213599 6.51548.213599 8.544892.213599 8.544892L1.617061 95.371c-.605195-3.702786 5.838354-14.419504 5.838354-14.419504l18.179592-12.06966z"
            fill="#ffebe0"
          />
          <path
            d="M20.852778 41.62126L10.623792 52.907636s-.545863 5.233746-.37973 11.298246c.083065 2.955108.355996 5.340557.474662 7.19195l1.507055 9.506192 1.993585 9.624871 10.905381-3.429825 1.127325-17.113519c-1.42399-1.98194-.79506-4.30805.391596-4.877709.581463-.261094 1.186658-.474716 1.744387-.67647 2.468247-.890093 1.886785-1.732714 1.934251-3.06192.047467-1.329205-.284797-1.459752-.854393-1.602167-.569596-.142415-1.447722-.866357-.047466-1.210526 1.056125-.261094.973059-.866357.854393-1.732714-.118666-.866357.355997-1.24613.688261-1.863261.320398-.617132-.189865-.759546-1.31719-1.056244-1.13919-.296698-1.079857-1.388545-1.376522-3.192466-.225465-1.412281-.083066-2.468525-1.483322-4.355522-1.400255-1.886996-4.093968-4.165634-5.933287-4.735294z"
            fill="#ffebe0"
          />
          <path
            d="M29.634043 53.904541c-1.139191-.296698-1.079858-1.388545-1.376523-3.192466-.225464-1.412281-.083066-2.468525-1.483321-4.355522-.55773-.759545-1.340923-1.57843-2.18345-2.337977l-.320397 1.41228c1.969851 1.958205 2.83611 3.370486 3.275174 6.0645.439063 2.694015 1.578254 3.323014 3.405707 3.465429.332264-.617131-.177999-.759546-1.31719-1.056244z"
            fill="#000"
            opacity=".1"
          />
          <path
            d="M29.337379 51.732714c-.52213-1.685242-1.969851-2.729618-3.239575-2.337977-1.222257.379773-1.827452 1.970072-1.38839 3.595975l-7.760738 1.768318.118665.545924 7.820073-1.780186c.261064.640867.676394 1.18679 1.17479 1.554696.439064.332301.913727.498452 1.376523.498452.189865 0 .367864-.023736.557729-.083076 1.257857-.39164 1.863052-2.076883 1.340923-3.762126zm-1.495188 3.263674c-.462797.142415-.984926.023736-1.45959-.332301-.510262-.379773-.901859-.973168-1.115457-1.661507-.439063-1.41228.011867-2.800825.996792-3.10939.984926-.308566 2.14785.593394 2.586913 1.993807.427197 1.41228-.023733 2.800826-1.008658 3.109391z"
            fill="#19b4fa"
          />
          <path
            d="M26.062204 83.93034s.177999 5.589784 4.734763 5.744067c-2.586913.45098-6.30115-.047472-4.734763-5.744066zM20.769712 87.478844c3.132776-2.421052 2.622513-4.735294 2.171583-6.883384-.45093-2.148091-.284797-4.284314 1.127325-6.206915 2.14785-4.058823-.118666-6.598555-2.432648-9.921568l-7.119944-4.224975C12.700442 67.588236 16.72321 72.09804 12.87844 74.36481c-3.785438 2.231167-5.482358 3.785862-8.377802 6.301858C-.03239 84.33385.952534 92.582044 1.617062 95.382869l9.362727-.213622s6.657148-5.257482 9.789923-7.690403z"
            opacity=".1"
            fill="#000"
          />
          <path
            d="M26.833532 40.93292c.593328 3.299278 1.685053 4.402994-5.138227 10.776059-1.779986 2.37358-4.058368 5.732198-1.518921 10.230134 2.539447 4.497936 5.411157 8.058307.510262 12.62745-1.103591 1.269867-1.269723 3.643448-1.269723 4.996389 0 1.35294.925593 5.83901-6.51475 7.19195-3.643037.67647-7.191143-1.519092-6.858879-9.221362-.083066-3.050052-3.80917-5.15067-3.46504-11.001548.510263-4.59288 4.568631-3.987616 6.51475-9.9097 1.946118-5.922085-1.934252-11.891642 8.294735-14.739939 4.651697-1.008772 8.686332.818886 9.445793-.949432z"
            fill="#002f7d"
          />
          <path
            d="M8.891272 95.287926v-7.120743c8.093003 1.958204 25.335135 0 25.335135 0v6.468008l-25.335135.652735z"
            fill="red"
          />
          <path
            d="M8.891272 88.155315v6.123839c7.748873 1.875129 10.21712-2.599071 11.87844-5.26935-4.307566.071207-8.769398-.094943-11.87844-.85449z"
            opacity=".1"
            fill="#000"
          />
          <path
            d="M19.416923 79.551084c0-1.032508.1068-2.670279.640795-3.952012.640795-3.952013 1.815586-7.381837-1.744387-8.485553-3.559972-1.103715-3.726104-3.216202-3.168375-5.589783.55773-2.37358.711995-3.560371-2.07665-8.639835-2.788645-5.079463-.047467-9.126419 2.07665-10.25387-7.381009 3.06192-4.2601 8.533024-6.051953 13.980392-1.946118 5.922085-6.004486 5.316822-6.514749 9.909701-.34413 5.850877 3.381974 7.951497 3.46504 11.001548C3.94291 88.155315 9.342202 91.039216 12.98524 90.362745c7.452208-1.35294 6.431683-9.45872 6.431683-10.811661z"
            fill="#002057"
          />
        </g>
        <g transform="translate(12.866574 4)">
          <ellipse
            fill="red"
            cx="42.778999"
            cy="47.803922"
            rx="1.673187"
            ry="1.673375"
          />
          <ellipse
            fill="#83dafc"
            cx="20.303708"
            cy="46.05934"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#83dafc"
            cx="42.6722"
            cy="64.763158"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#fff"
            cx="50.183742"
            cy="27.426729"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#19b4fa"
            cx="65.420423"
            cy="85.270898"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="red"
            cx="42.624734"
            cy="1.352941"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#fff"
            cx="18.879719"
            cy="17.089783"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="red"
            transform="rotate(-37.908 2.550844 54.423151)"
            cx="2.550844"
            cy="54.423151"
            rx="1.36472"
            ry="1"
          />
          <ellipse
            fill="red"
            transform="rotate(-2.455 54.694293 23.55823)"
            cx="54.694293"
            cy="23.558231"
            rx="1.36468"
            ry="1"
          />
          <ellipse
            fill="#19b4fa"
            transform="rotate(-57.9 61.425163 36.411476)"
            cx="61.425163"
            cy="36.411476"
            rx="1"
            ry="1.459609"
          />
          <ellipse
            fill="#19b4fa"
            transform="rotate(-37.908 53.139259 69.497726)"
            cx="53.139259"
            cy="69.497726"
            rx="1.459657"
            ry="1"
          />
          <ellipse
            fill="red"
            cx="16.779336"
            cy="40.908669"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#fff"
            cx="43.941924"
            cy="80.310113"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#19b4fa"
            transform="rotate(-44.49 24.126162 7.044518)"
            cx="24.126162"
            cy="7.044518"
            rx="1"
            ry="1.210497"
          />
          <ellipse
            fill="#83dafc"
            cx="66.19175"
            cy="57.583075"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#19b4fa"
            cx="55.606766"
            cy="44.836945"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="red"
            transform="rotate(-12.022 12.043558 27.417762)"
            cx="12.043558"
            cy="27.417762"
            rx="1"
            ry="1.364849"
          />
          <ellipse
            fill="red"
            transform="rotate(-66.573 64.310881 73.124534)"
            cx="64.310881"
            cy="73.124534"
            rx="1.364837"
            ry="1"
          />
          <ellipse
            fill="#19b4fa"
            transform="rotate(-32.018 4.639984 43.318539)"
            cx="4.639984"
            cy="43.318539"
            rx="1.459669"
            ry="1"
          />
          <ellipse
            fill="#83dafc"
            transform="rotate(-12.022 28.504917 46.063226)"
            cx="28.504917"
            cy="46.063226"
            rx="1"
            ry="1.459795"
          />
          <ellipse
            fill="#19b4fa"
            cx="24.979138"
            cy="33.859133"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="red"
            cx="26.91339"
            cy="53.156347"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#fff"
            cx="64.304965"
            cy="47.803922"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#83dafc"
            cx="22.309159"
            cy="28.696594"
            rx="1.269723"
            ry="1.269866"
          />
          <ellipse
            fill="#fff"
            transform="rotate(-13.97 48.758383 16.314683)"
            cx="48.758383"
            cy="16.314683"
            rx="1.115438"
            ry="1.269826"
          />
          <ellipse
            fill="#83dafc"
            transform="rotate(-60.31 18.314246 35.667225)"
            cx="18.314246"
            cy="35.667225"
            rx="1"
            ry="1.364668"
          />
          <ellipse
            fill="red"
            transform="rotate(-24.86 64.608164 58.183792)"
            cx="64.608164"
            cy="58.183792"
            rx="1"
            ry="1.364734"
          />
          <ellipse
            fill="#19b4fa"
            transform="rotate(-80.305 26.264857 70.264137)"
            cx="26.264857"
            cy="70.264137"
            rx="1.459721"
            ry="1"
          />
          <ellipse
            fill="#83dafc"
            transform="rotate(-60.31 1.721544 76.055718)"
            cx="1.721544"
            cy="76.055718"
            rx="1"
            ry="1.459601"
          />
          <ellipse
            fill="#19b4fa"
            transform="rotate(-31.272 42.622192 26.867912)"
            cx="42.622192"
            cy="26.867912"
            rx="1.198547"
            ry="1.590233"
          />
        </g>
      </g>
    </g>
  </svg>
)

storiesOf('Pages/Contribute', module).add('Thanks', () => {
  return (
    <Marger top="10" bottom="10">
      <Container>
        <Grid>
          <GridCol
            col-xs="12"
            offset-xs="0"
            col-m="9"
            offset-m="1"
            col-l="6"
            offset-l="3"
          >
            <FlexTitleContainer>
              <RocketIllustration />
              <Text tag="h1" weight="bold">
                Bravo, grâce à vous
                <br />
                la collecte progresse&nbsp;!
              </Text>
            </FlexTitleContainer>
            <Marger top="3" bottom="4">
              <PageIntroText>
                Vos contreparties seront délivrées par le créateur quand la
                collecte sera réussie.
                <br />
                Vous pourrez également lui demander un reçu de don.
              </PageIntroText>
            </Marger>
          </GridCol>
          <GridCol
            col-xs="12"
            offset-xs="0"
            col-m="9"
            offset-m="1"
            col-l="5"
            offset-l="3"
          >
            <Marger bottom="8">
              <PageSubTitles tag="h2" weight="bold">
                Postez un message de soutien sur la page du projet
              </PageSubTitles>
              <Marger top="2">
                <TextInput
                  tag="textarea"
                  rows="4"
                  placeholder="Laissez un message au porteur de projet…"
                  aria-label="Laissez un message au porteur de projet"
                />
              </Marger>
              <Marger top="3" className="k-u-align-center@s-down">
                <Button modifier="helium" size="big">
                  Valider
                </Button>
              </Marger>
            </Marger>

            <Marger bottom="8">
              <Marger bottom="3">
                <PageSubTitles tag="h2" weight="bold">
                  Faites connaître le projet
                </PageSubTitles>
              </Marger>
              <FlexButtonsContainer>
                <Marger bottom="2">
                  <Button
                    icon
                    modifier="facebook"
                    tag="a"
                    iconWithMinWidth={true}
                  >
                    <FacebookIconWithBackgroundNoPadding className="k-Button__icon k-Button__icon--facebook" />
                    Partager sur Facebook
                  </Button>
                </Marger>

                <Marger bottom="2">
                  <Button
                    icon
                    size="big"
                    modifier="twitter"
                    tag="a"
                    iconWithMinWidth={true}
                  >
                    <TwitterIconNoPadding className="k-Button__icon" />
                    Partager sur Twitter
                  </Button>
                </Marger>

                <Marger bottom="2">
                  <Button
                    icon
                    modifier="lithium"
                    size="big"
                    tag="a"
                    iconWithMinWidth={true}
                  >
                    <EmailIconNoPadding className="k-Button__icon" />
                    Partager par email
                  </Button>
                </Marger>
              </FlexButtonsContainer>
            </Marger>
          </GridCol>
        </Grid>
      </Container>

      <ProjectsCarousel title="Test" buttonHref="#" buttonLabel="Voir plus" />
    </Marger>
  )
})
