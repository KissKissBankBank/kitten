import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { GUTTER } from '../../../../constants/grid-config';
import { pxToRem } from '../../../../helpers/utils/typography';
export var StyledCropper = styled.div.withConfig({
  displayName: "styles__StyledCropper",
  componentId: "sc-eyudp3-0"
})([".k-Cropper__wrapper{display:flex;flex-direction:column;gap:", ";&:empty{margin:0;}@media (min-width:", "){flex-direction:row;.k-Cropper__wrapper__cropper{flex:0 1 50%;width:50%;}.k-Cropper__wrapper__slider{flex:0 1 50%;width:50%;}}}.k-Cropper__wrapper__cropper{@media (max-width:", "){margin-bottom:", ";}@media (min-width:", "){margin-right:", ";}}.k-Cropper{.cropper-container{font-size:0;line-height:0;position:relative;user-select:none;direction:ltr;touch-action:none;}.cropper-container img{display:block;min-width:0 !important;max-width:none !important;min-height:0 !important;max-height:none !important;width:100%;height:100%;image-orientation:0deg;}.cropper-wrap-box,.cropper-canvas,.cropper-drag-box,.cropper-crop-box,.cropper-modal{position:absolute;top:0;right:0;bottom:0;left:0;}.cropper-wrap-box{overflow:hidden;}.cropper-drag-box{opacity:0;background-color:#fff;}.cropper-modal{opacity:0.5;background-color:#000;}.cropper-view-box{display:block;overflow:hidden;width:100%;height:100%;outline:1px solid ", ";}.cropper-dashed{position:absolute;display:block;opacity:0.5;border:0 dashed #eee;}.cropper-dashed.dashed-h{top:33.33333%;left:0;width:100%;height:33.33333%;border-top-width:1px;border-bottom-width:1px;}.cropper-dashed.dashed-v{top:0;left:33.33333%;width:33.33333%;height:100%;border-right-width:1px;border-left-width:1px;}.cropper-center{position:absolute;top:50%;left:50%;display:none;width:0;height:0;opacity:0.75;}.cropper-center:before,.cropper-center:after{position:absolute;display:block;content:' ';background-color:#eee;}.cropper-center:before{top:0;left:-3px;width:7px;height:1px;}.cropper-center:after{top:-3px;left:0;width:1px;height:7px;}.cropper-face,.cropper-line,.cropper-point{position:absolute;display:block;width:100%;height:100%;opacity:0;}.cropper-face{top:0;left:0;background-color:#fff;}.cropper-line{background-color:#39f;}.cropper-line.line-e{top:0;right:-3px;width:5px;cursor:e-resize;}.cropper-line.line-n{top:-3px;left:0;height:5px;cursor:n-resize;}.cropper-line.line-w{top:0;left:-3px;width:5px;cursor:w-resize;}.cropper-line.line-s{bottom:-3px;left:0;height:5px;cursor:s-resize;}.cropper-point{width:5px;height:5px;opacity:0.75;background-color:#39f;}.cropper-point.point-e{top:50%;right:-3px;margin-top:-3px;cursor:e-resize;}.cropper-point.point-n{top:-3px;left:50%;margin-left:-3px;cursor:n-resize;}.cropper-point.point-w{top:50%;left:-3px;margin-top:-3px;cursor:w-resize;}.cropper-point.point-s{bottom:-3px;left:50%;margin-left:-3px;cursor:s-resize;}.cropper-point.point-ne{top:-3px;right:-3px;cursor:ne-resize;}.cropper-point.point-nw{top:-3px;left:-3px;cursor:nw-resize;}.cropper-point.point-sw{bottom:-3px;left:-3px;cursor:sw-resize;}.cropper-point.point-se{right:-3px;bottom:-3px;width:20px;height:20px;cursor:se-resize;opacity:1;}@media (min-width:768px){.cropper-point.point-se{width:15px;height:15px;}}@media (min-width:992px){.cropper-point.point-se{width:10px;height:10px;}}@media (min-width:1200px){.cropper-point.point-se{width:5px;height:5px;opacity:0.75;}}.cropper-point.point-se:before{position:absolute;right:-50%;bottom:-50%;display:block;width:200%;height:200%;content:' ';opacity:0;background-color:#39f;}.cropper-invisible{opacity:0;}.cropper-hide{position:absolute;display:block;width:0;height:0;}.cropper-hidden{display:none !important;}.cropper-move{cursor:move;}.cropper-crop{cursor:crosshair;}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed;}}"], pxToRem(GUTTER), pxToRem(ScreenConfig.S.min), pxToRem(ScreenConfig.XS.max), pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(10), COLORS.line1);