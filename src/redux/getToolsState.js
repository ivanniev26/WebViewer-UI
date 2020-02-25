import React from 'react';
import core from 'core';
import SignatureToolButton from 'components/SignatureToolButton';
import actions from 'actions';

const getTools = () => {
  // const isMobile = !window.matchMedia('(min-width: 641px)').matches;
  const isMobile = window.matchMedia('(max-width: 900px)').matches;

  const desktopState = [
    { type: 'spacer' },
    { type: 'toolGroupButton', toolGroup: 'freeHandTools', dataElement: 'freeHandToolGroupButton', title: 'component.freehandToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'shapeTools', dataElement: 'shapeToolGroupButton', title: 'component.shapeToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'textTools', dataElement: 'textToolGroupButton', title: 'component.textToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'textTools2', dataElement: 'textToolGroupButton2', title: 'component.textToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'measurementTools', dataElement: 'measurementToolGroupButton', title: 'component.measurementToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'freeTextTools', dataElement: 'freeTextToolGroupButton', title: 'component.freeTextToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'stickyTools', dataElement: 'stickyToolGroupButton', title: 'component.stickyToolsButton' },
    { type: 'toggleElementButton', toolName: 'AnnotationCreateRedaction', className: 'redactHeader', dataElement: 'redactionButton', element: 'redactionOverlay', img: 'ic_annotation_add_redact_black_24px', title: 'component.redaction' },
    {
      type: 'customElement',
      render: () => <SignatureToolButton />,
      // dataElement: 'signatureToolButton',
    },
    { type: 'toolGroupButton', toolGroup: 'miscTools', img: 'ic_more_black_24px', dataElement: 'miscToolGroupButton', title: 'component.miscToolsButton' },
    { type: 'divider' },
    {
      type: 'actionButton',
      dataElement: 'undoButton',
      titile: 'action.close',
      img: 'icon-operation-undo',
      onClick: () => {
        core.undo();
      },
    },
    {
      type: 'actionButton',
      dataElement: 'redoButton',
      titile: 'action.close',
      img: 'icon-operation-redo',
      onClick: () => {
        core.redo();
      },
    },
    { type: 'toolButton', toolName: 'AnnotationEraserTool' },
    { type: 'spacer' },
    {
      type: 'actionButton',
      dataElement: 'closeToolsButton',
      titile: 'action.close',
      img: 'ic_close_black_24px',
      style: { position: 'absolute', right: 0 },
      onClick: dispatch => {
        dispatch(actions.closeElements(['toolsHeader', 'toolsOverlay']));
        dispatch(actions.setActiveToolGroup(''));
      },
    },
  ];

  const tabletState = [
    { type: 'spacer' },
    { type: 'toolGroupButton', toolGroup: 'textTools', dataElement: 'textToolGroupButton', title: 'component.textToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'textTools2', dataElement: 'textToolGroupButton2', title: 'component.textToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'freeHandTools', dataElement: 'freeHandToolGroupButton', title: 'component.freehandToolsButton', img: 'icon - tool - pen and shape - phone - line' },
    // { type: 'toolGroupButton', toolGroup: 'shapeTools', dataElement: 'shapeToolGroupButton', title: 'component.shapeToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'freeTextTools', dataElement: 'freeTextToolGroupButton', title: 'component.freeTextToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'stickyTools', dataElement: 'stickyToolGroupButton', title: 'component.stickyToolsButton' },
    {
      type: 'customElement',
      render: () => <SignatureToolButton />,
      // dataElement: 'signatureToolButton',
    },

    { type: 'toolGroupButton', toolGroup: 'measurementTools', dataElement: 'measurementToolGroupButton', title: 'component.measurementToolsButton' },
    { type: 'toggleElementButton', toolName: 'AnnotationCreateRedaction', className: 'redactHeader', dataElement: 'redactionButton', element: 'redactionOverlay', img: 'ic_annotation_add_redact_black_24px', title: 'component.redaction' },

    { type: 'toolGroupButton', toolGroup: 'miscTools', img: 'ic_more_black_24px', dataElement: 'miscToolGroupButton', title: 'component.miscToolsButton' },
    { type: 'divider' },
    {
      type: 'actionButton',
      dataElement: 'undoButton',
      titile: 'action.close',
      img: 'icon-operation-undo',
      onClick: () => {
        core.undo();
      },
    },
    {
      type: 'actionButton',
      dataElement: 'redoButton',
      titile: 'action.close',
      img: 'icon-operation-redo',
      onClick: () => {
        core.redo();
      },
    },
    { type: 'toolButton', toolName: 'AnnotationEraserTool' },
    { type: 'spacer' },
    {
      type: 'actionButton',
      dataElement: 'closeToolsButton',
      titile: 'action.close',
      img: 'ic_close_black_24px',
      style: { position: 'absolute', right: 0 },
      onClick: dispatch => {
        dispatch(actions.closeElements(['toolsHeader', 'toolsOverlay']));
        dispatch(actions.setActiveToolGroup(''));
      },
    },
  ];

  const mobileState = [
    { type: 'toolGroupButton', toolGroup: 'textTools', dataElement: 'textToolGroupButton', title: 'component.textToolsButton' },
    // { type: 'toolGroupButton', toolGroup: 'textTools2', dataElement: 'textToolGroupButton2', title: 'component.textToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'freeHandTools', dataElement: 'freeHandToolGroupButton', title: 'component.freehandToolsButton', img: 'icon - tool - pen and shape - phone - line' },
    // { type: 'toolGroupButton', toolGroup: 'shapeTools', dataElement: 'shapeToolGroupButton', title: 'component.shapeToolsButton' },
    { type: 'toolGroupButton', toolGroup: 'freeTextTools', dataElement: 'freeTextToolGroupButton', title: 'component.freeTextToolsButton' },
    // { type: 'toolGroupButton', toolGroup: 'stickyTools', dataElement: 'stickyToolGroupButton', title: 'component.stickyToolsButton' },
    {
      type: 'customElement',
      render: () => <SignatureToolButton />,
      // dataElement: 'signatureToolButton',
    },

    { type: 'toolGroupButton', toolGroup: 'measurementTools', dataElement: 'measurementToolGroupButton', title: 'component.measurementToolsButton' },
    { type: 'toggleElementButton', toolName: 'AnnotationCreateRedaction', className: 'redactHeader', dataElement: 'redactionButton', element: 'redactionOverlay', img: 'ic_annotation_add_redact_black_24px', title: 'component.redaction' },

    { type: 'toolGroupButton', toolGroup: 'miscTools', img: 'ic_more_black_24px', dataElement: 'miscToolGroupButton', title: 'component.miscToolsButton' },
    {
      type: 'actionButton',
      dataElement: 'closeToolsButton',
      titile: 'action.close',
      img: 'ic_close_black_24px',
      style: { position: 'absolute', right: 0 },
      onClick: dispatch => {
        dispatch(actions.closeElements(['toolsHeader', 'toolsOverlay']));
        dispatch(actions.setActiveToolGroup(''));
      },
    },
  ];

  if (window.matchMedia('(max-width: 640px)').matches) {
    return mobileState;
  }
  if (window.matchMedia('(max-width: 900px)').matches) {
    return tabletState;
  }
  return desktopState;
};

const getToolButtonObjects = () => {
  const desktopState = {
    AnnotationCreateDistanceMeasurement: { dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'measurementTools', showColor: 'active' },
    AnnotationCreatePerimeterMeasurement: { dataElement: 'perimeterMeasurementToolButton', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'measurementTools', showColor: 'active' },
    AnnotationCreateAreaMeasurement: { dataElement: 'areaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'measurementTools', showColor: 'active' },
    AnnotationCreateFreeHand: { dataElement: 'freeHandToolButton', title: 'annotation.freehand', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateFreeHand2: { dataElement: 'freeHandToolButton2', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateFreeHand3: { dataElement: 'freeHandToolButton3', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateFreeHand4: { dataElement: 'freeHandToolButton4', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateTextHighlight: { dataElement: 'highlightToolButton', title: 'annotation.highlight', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextHighlight2: { dataElement: 'highlightToolButton2', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextHighlight3: { dataElement: 'highlightToolButton3', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextHighlight4: { dataElement: 'highlightToolButton4', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextUnderline: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'ic_annotation_underline_black_24px', group: 'textTools2', showColor: 'always' },
    AnnotationCreateTextSquiggly: { dataElement: 'squigglyToolButton', title: 'annotation.squiggly', img: 'ic_annotation_squiggly_black_24px', group: 'textTools2', showColor: 'always' },
    AnnotationCreateTextStrikeout: { dataElement: 'strikeoutToolButton', title: 'annotation.strikeout', img: 'ic_annotation_strikeout_black_24px', group: 'textTools2', showColor: 'always' },

    AnnotationCreateFreeText: { dataElement: 'freeTextToolButton', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
    AnnotationCreateFreeText2: { dataElement: 'freeTextToolButton2', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
    AnnotationCreateFreeText3: { dataElement: 'freeTextToolButton3', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
    AnnotationCreateFreeText4: { dataElement: 'freeTextToolButton4', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },

    AnnotationCreateSticky: { dataElement: 'sitckyToolButton', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
    AnnotationCreateSticky2: { dataElement: 'sitckyToolButton2', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
    AnnotationCreateSticky3: { dataElement: 'sitckyToolButton3', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
    AnnotationCreateSticky4: { dataElement: 'sitckyToolButton4', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },

    AnnotationCreateRectangle: { dataElement: 'rectangleToolButton', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'shapeTools', showColor: 'always' },
    AnnotationCreateEllipse: { dataElement: 'ellipseToolButton', title: 'annotation.ellipse', img: 'ic_annotation_circle_black_24px', group: 'shapeTools', showColor: 'always' },
    AnnotationCreateLine: { dataElement: 'lineToolButton', title: 'annotation.line', img: 'ic_annotation_line_black_24px', group: 'shapeTools', showColor: 'always' },
    AnnotationCreateArrow: { dataElement: 'arrowToolButton', title: 'annotation.arrow', img: 'ic_annotation_arrow_black_24px', group: 'shapeTools', showColor: 'always' },
    AnnotationCreatePolyline: { dataElement: 'polylineToolButton', title: 'annotation.polyline', img: 'ic_annotation_polyline_black_24px', group: 'shapeTools', showColor: 'always' },
    AnnotationCreatePolygon: { dataElement: 'polygonToolButton', title: 'annotation.polygon', img: 'ic_annotation_polygon_black_24px', group: 'shapeTools', showColor: 'always' },
    AnnotationCreatePolygonCloud: { dataElement: 'cloudToolButton', title: 'annotation.polygonCloud', img: 'ic_annotation_cloud_black_24px', group: 'shapeTools', showColor: 'always' },
    AnnotationCreateRedaction: { dataElement: 'redactionButton', title: 'option.redaction.markForRedaction', img: 'ic_annotation_add_redact_black_24px', showColor: 'never' },
    AnnotationCreateSignature: { dataElement: 'signatureToolButton', title: 'annotation.signature', img: 'ic_annotation_signature_black_24px', group: 'signatureTools', showColor: 'active' },

    AnnotationCreateCallout: { dataElement: 'calloutToolButton', title: 'annotation.callout', img: 'ic_annotation_callout_black_24px', group: 'miscTools', showColor: 'active' },
    AnnotationCreateStamp: { dataElement: 'stampToolButton', title: 'annotation.stamp', img: 'icon-tool-image-fill', group: 'miscTools', showColor: 'active' },
    AnnotationCreateRubberStamp: { dataElement: 'rubberStampToolButton', title: 'annotation.rubberStamp', img: 'icon-tool-stamp-fill', group: 'miscTools', showColor: 'active' },
    Pan: { dataElement: 'panToolButton', title: 'tool.pan', img: 'icon-header-pan', showColor: 'never' },
    AnnotationEdit: { dataElement: 'selectToolButton', title: 'tool.select', img: 'icon-header-select-line', showColor: 'never' },
    // For mobile
    TextSelect: { dataElement: 'textSelectButton', img: 'icon - header - select - line', showColor: 'never' },
    MarqueeZoomTool: { dataElement: 'marqueeToolButton', showColor: 'never' },
    AnnotationEraserTool: { dataElement: 'eraserToolButton', title: 'annotation.eraser', img: 'icon-operation-eraser', showColor: 'never' },
    CropPage: { dataElement: 'cropToolButton', title: 'annotation.crop', img: 'ic_crop_black_24px', showColor: 'never', group: 'miscTools' },
  };

  const mobileState = {
    AnnotationCreateDistanceMeasurement: { dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'measurementTools', showColor: 'active' },
    AnnotationCreatePerimeterMeasurement: { dataElement: 'perimeterMeasurementToolButton', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'measurementTools', showColor: 'active' },
    AnnotationCreateAreaMeasurement: { dataElement: 'areaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'measurementTools', showColor: 'active' },
    // AnnotationCreateFreeHand: { dataElement: 'freeHandToolButton', title: 'annotation.freehand', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateFreeHand2: { dataElement: 'freeHandToolButton2', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    // AnnotationCreateFreeHand3: { dataElement: 'freeHandToolButton3', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    // AnnotationCreateFreeHand4: { dataElement: 'freeHandToolButton4', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateTextHighlight: { dataElement: 'highlightToolButton', title: 'annotation.highlight', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    // AnnotationCreateTextHighlight2: { dataElement: 'highlightToolButton2', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    // AnnotationCreateTextHighlight3: { dataElement: 'highlightToolButton3', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    // AnnotationCreateTextHighlight4: { dataElement: 'highlightToolButton4', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextUnderline: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'ic_annotation_underline_black_24px', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextSquiggly: { dataElement: 'squigglyToolButton', title: 'annotation.squiggly', img: 'ic_annotation_squiggly_black_24px', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextStrikeout: { dataElement: 'strikeoutToolButton', title: 'annotation.strikeout', img: 'ic_annotation_strikeout_black_24px', group: 'textTools', showColor: 'always' },

    AnnotationCreateFreeText: { dataElement: 'freeTextToolButton', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
    AnnotationCreateFreeText2: { dataElement: 'freeTextToolButton2', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
    // AnnotationCreateFreeText3: { dataElement: 'freeTextToolButton3', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
    // AnnotationCreateFreeText4: { dataElement: 'freeTextToolButton4', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },

    AnnotationCreateSticky: { dataElement: 'sitckyToolButton', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'freeTextTools', showColor: 'always' },
    // AnnotationCreateSticky2: { dataElement: 'sitckyToolButton2', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
    // AnnotationCreateSticky3: { dataElement: 'sitckyToolButton3', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
    // AnnotationCreateSticky4: { dataElement: 'sitckyToolButton4', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },

    AnnotationCreateRectangle: { dataElement: 'rectangleToolButton', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateEllipse: { dataElement: 'ellipseToolButton', title: 'annotation.ellipse', img: 'ic_annotation_circle_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateLine: { dataElement: 'lineToolButton', title: 'annotation.line', img: 'ic_annotation_line_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateArrow: { dataElement: 'arrowToolButton', title: 'annotation.arrow', img: 'ic_annotation_arrow_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreatePolyline: { dataElement: 'polylineToolButton', title: 'annotation.polyline', img: 'ic_annotation_polyline_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateRedaction: { dataElement: 'redactionButton', title: 'option.redaction.markForRedaction', img: 'ic_annotation_add_redact_black_24px', showColor: 'never' },
    AnnotationCreateSignature: { dataElement: 'signatureToolButton', title: 'annotation.signature', img: 'ic_annotation_signature_black_24px', group: 'signatureTools', showColor: 'active' },

    AnnotationCreateCallout: { dataElement: 'calloutToolButton', title: 'annotation.callout', img: 'ic_annotation_callout_black_24px', group: 'freeTextTools', showColor: 'always' },
    AnnotationCreateStamp: { dataElement: 'stampToolButton', title: 'annotation.stamp', img: 'icon-tool-image-line', group: 'miscTools', showColor: 'active' },
    AnnotationCreateRubberStamp: { dataElement: 'rubberStampToolButton', title: 'annotation.rubberStamp', img: 'icon-tool-stamp-line', group: 'miscTools', showColor: 'active' },
    Pan: { dataElement: 'panToolButton', title: 'tool.pan', img: 'icon-header-pan', showColor: 'never' },
    AnnotationEdit: { dataElement: 'selectToolButton', title: 'tool.select', img: 'icon-header-select-line', showColor: 'never' },
    // For mobile
    TextSelect: { dataElement: 'textSelectButton', img: 'icon - header - select - line', showColor: 'never' },
    MarqueeZoomTool: { dataElement: 'marqueeToolButton', showColor: 'never' },
    AnnotationEraserTool: { dataElement: 'eraserToolButton', title: 'annotation.eraser', img: 'icon-operation-eraser', showColor: 'never' },
    CropPage: { dataElement: 'cropToolButton', title: 'annotation.crop', img: 'ic_crop_black_24px', showColor: 'never', group: 'miscTools' },
    AnnotationCreatePolygon: { dataElement: 'polygonToolButton', title: 'annotation.polygon', img: 'ic_annotation_polygon_black_24px', group: 'miscTools', showColor: 'never' },
    AnnotationCreatePolygonCloud: { dataElement: 'cloudToolButton', title: 'annotation.polygonCloud', img: 'ic_annotation_cloud_black_24px', group: 'miscTools', showColor: 'never' },    
  };

  const tabletState = {
    AnnotationCreateDistanceMeasurement: { dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'measurementTools', showColor: 'active' },
    AnnotationCreatePerimeterMeasurement: { dataElement: 'perimeterMeasurementToolButton', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'measurementTools', showColor: 'active' },
    AnnotationCreateAreaMeasurement: { dataElement: 'areaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'measurementTools', showColor: 'active' },
    // AnnotationCreateFreeHand: { dataElement: 'freeHandToolButton', title: 'annotation.freehand', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateFreeHand2: { dataElement: 'freeHandToolButton2', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    // AnnotationCreateFreeHand3: { dataElement: 'freeHandToolButton3', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    // AnnotationCreateFreeHand4: { dataElement: 'freeHandToolButton4', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateTextHighlight: { dataElement: 'highlightToolButton', title: 'annotation.highlight', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextHighlight2: { dataElement: 'highlightToolButton2', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextHighlight3: { dataElement: 'highlightToolButton3', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextHighlight4: { dataElement: 'highlightToolButton4', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
    AnnotationCreateTextUnderline: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'ic_annotation_underline_black_24px', group: 'textTools2', showColor: 'always' },
    AnnotationCreateTextSquiggly: { dataElement: 'squigglyToolButton', title: 'annotation.squiggly', img: 'ic_annotation_squiggly_black_24px', group: 'textTools2', showColor: 'always' },
    AnnotationCreateTextStrikeout: { dataElement: 'strikeoutToolButton', title: 'annotation.strikeout', img: 'ic_annotation_strikeout_black_24px', group: 'textTools2', showColor: 'always' },


    AnnotationCreateFreeText: { dataElement: 'freeTextToolButton', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
    AnnotationCreateFreeText2: { dataElement: 'freeTextToolButton2', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
    AnnotationCreateFreeText3: { dataElement: 'freeTextToolButton3', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
    AnnotationCreateFreeText4: { dataElement: 'freeTextToolButton4', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },

    AnnotationCreateSticky: { dataElement: 'sitckyToolButton', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
    AnnotationCreateSticky2: { dataElement: 'sitckyToolButton2', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
    AnnotationCreateSticky3: { dataElement: 'sitckyToolButton3', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
    AnnotationCreateSticky4: { dataElement: 'sitckyToolButton4', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },

    AnnotationCreateRectangle: { dataElement: 'rectangleToolButton', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateEllipse: { dataElement: 'ellipseToolButton', title: 'annotation.ellipse', img: 'ic_annotation_circle_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateLine: { dataElement: 'lineToolButton', title: 'annotation.line', img: 'ic_annotation_line_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateArrow: { dataElement: 'arrowToolButton', title: 'annotation.arrow', img: 'ic_annotation_arrow_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreatePolyline: { dataElement: 'polylineToolButton', title: 'annotation.polyline', img: 'ic_annotation_polyline_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreatePolygon: { dataElement: 'polygonToolButton', title: 'annotation.polygon', img: 'ic_annotation_polygon_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreatePolygonCloud: { dataElement: 'cloudToolButton', title: 'annotation.polygonCloud', img: 'ic_annotation_cloud_black_24px', group: 'freeHandTools', showColor: 'always' },
    AnnotationCreateRedaction: { dataElement: 'redactionButton', title: 'option.redaction.markForRedaction', img: 'ic_annotation_add_redact_black_24px', showColor: 'never' },
    AnnotationCreateSignature: { dataElement: 'signatureToolButton', title: 'annotation.signature', img: 'ic_annotation_signature_black_24px', group: 'signatureTools', showColor: 'active' },

    AnnotationCreateCallout: { dataElement: 'calloutToolButton', title: 'annotation.callout', img: 'ic_annotation_callout_black_24px', group: 'miscTools', showColor: 'never' },
    AnnotationCreateStamp: { dataElement: 'stampToolButton', title: 'annotation.stamp', img: 'icon-tool-image-line', group: 'miscTools', showColor: 'active' },
    AnnotationCreateRubberStamp: { dataElement: 'rubberStampToolButton', title: 'annotation.rubberStamp', img: 'icon-tool-stamp-line', group: 'miscTools', showColor: 'active' },
    Pan: { dataElement: 'panToolButton', title: 'tool.pan', img: 'icon-header-pan', showColor: 'never' },
    AnnotationEdit: { dataElement: 'selectToolButton', title: 'tool.select', img: 'icon-header-select-line', showColor: 'never' },
    // For mobile
    TextSelect: { dataElement: 'textSelectButton', img: 'icon - header - select - line', showColor: 'never' },
    MarqueeZoomTool: { dataElement: 'marqueeToolButton', showColor: 'never' },
    AnnotationEraserTool: { dataElement: 'eraserToolButton', title: 'annotation.eraser', img: 'icon-operation-eraser', showColor: 'never' },
    CropPage: { dataElement: 'cropToolButton', title: 'annotation.crop', img: 'ic_crop_black_24px', showColor: 'never', group: 'miscTools' },
  };

  if (window.matchMedia('(max-width: 640px)').matches) {
    return mobileState;
  }
  if (window.matchMedia('(max-width: 900px)').matches) {
    return tabletState;
  }
  return desktopState;
};

export {
  getTools,
  getToolButtonObjects,
};
