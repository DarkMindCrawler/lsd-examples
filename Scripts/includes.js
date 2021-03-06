(function(prefix, rekwire) {
      var sources = [
  "../../qfocuser/Source/QFocuser.js",
  "../../mootools-core/Source/Core/Core.js",
  "../../mootools-core/Source/Types/Object.js",
  "../../mootools-core/Source/Types/Array.js",
  "../../mootools-color/Source/Color.js",
  "../../mootools-more/Source/Core/More.js",
  "../../mootools-core/Source/Types/Function.js",
  "../../mootools-core/Source/Types/Number.js",
  "../../mootools-core/Source/Types/String.js",
  "../../mootools-core/Source/Class/Class.js",
  "../../mootools-ext/Source/Types/FastArray.js",
  "../../mootools-more/Source/Class/Class.Binds.js",
  "../../mootools-ext/Source/Core/Class.Binds.Remover.js",
  "../../mootools-core/Source/Class/Class.Extras.js",
  "../../mootools-ext/Source/Core/Class.Includes.js",
  "../../mootools-ext/Source/Core/Class.States.js",
  "../../mootools-ext/Source/Utilities/Observer.js",
  "../../mootools-ext/Source/Core/Class.Macros.js",
  "../../mootools-core/Source/Fx/Fx.js",
  "../../art/Source/ART.js",
  "../../../Source/ART/ART.Element.js",
  "../../art/Source/ART.Path.js",
  "../../art/Source/ART.VML.js",
  "../../art/Source/ART.SVG.js",
  "../../../Source/ART/ART.SVG.js",
  "../../art/Source/ART.Base.js",
  "../../mootools-ext/Source/Utilities/Logger.js",
  "../../mootools-core/Source/Browser/Browser.js",
  "../../mootools-core/Source/Types/Event.js",
  "../../mootools-ext/Source/Types/Event.js",
  "../../../Source/ART.js",
  "../../../Source/Container.js",
  "../../../Source/Glyphs.js",
  "../../mootools-core/Source/Slick/Slick.Parser.js",
  "../../mootools-core/Source/Slick/Slick.Finder.js",
  "../../mootools-core/Source/Element/Element.js",
  "../../mootools-core/Source/Element/Element.Style.js",
  "../../mootools-core/Source/Element/Element.Dimensions.js",
  "../../mootools-more/Source/Element/Element.Measure.js",
  "../../mootools-core/Source/Fx/Fx.CSS.js",
  "../../mootools-core/Source/Fx/Fx.Tween.js",
  "../../mootools-touch/Source/Touch.js",
  "../../mootools-core/Source/Element/Element.Event.js",
  "../../mootools-more/Source/Drag/Drag.js",
  "../../mootools-ext/Source/Drag/Drag.Limits.js",
  "../../mootools-more/Source/Drag/Slider.js",
  "../../mootools-ext/Source/Element/Events/Keypress.js",
  "../../mootools-core/Source/Utilities/DomReady.js",
  "../../lsd-base/Source/Widget/Base.js",
  "../../lsd-base/Source/Widget/Trait/Animation.js",
  "../../lsd-base/Source/Widget/Trait/Slider.js",
  "../../../Source/Widget/Base.js",
  "../../../Source/Widget/Trait/Dimensions.js",
  "../../../Source/Widget/Module/Position.js",
  "../../../Source/Layout.js",
  "../../../Source/Widget/Module/Layout.js",
  "../../../Source/Widget/Module/DOM.js",
  "../../../Source/Document.js",
  "../../../Source/Widget/Module/Styles.js",
  "../../../Source/Shape.js",
  "../../../Source/Shape/Ellipse.js",
  "../../../Source/Shape/Flower.js",
  "../../../Source/Widget/Trait/Shape.js",
  "../../../Source/Shape/Star.js",
  "../../../Source/Shape/Arrow.js",
  "../../../Source/Shape/Rectangle.js",
  "../../../Source/Layer.js",
  "../../../Source/Widget/Trait/Layers.js",
  "../../../Source/Layer/Fill.js",
  "../../../Source/Layer/Glyph.js",
  "../../../Source/Layer/Shadow.js",
  "../../../Source/Layer/InnerShadow.js",
  "../../../Source/Layer/Stroke.js",
  "../../../Source/Layer/Icon.js",
  "../../../Source/Widget/Module/Container.js",
  "../../../Source/Widget/Trait/Liquid.js",
  "../../../Source/Widget/Trait/Aware.js",
  "../../../Source/Widget/Trait/ProxyChildren.js",
  "../../../Source/Widget/Module/Expression.js",
  "../../../Source/Widget/Trait/Hoverable.js",
  "../../../Source/Widget/Trait/Fitting.js",
  "../../../Source/Widget/Trait/Resizable.js",
  "../../../Source/Widget/Trait/ResizableContainer.js",
  "../../../Source/Widget/Trait/Draggable.js",
  "../../lsd-base/Source/Widget/Trait/Touchable.js",
  "../../lsd-base/Source/Widget/Trait/Item.js",
  "../../lsd-base/Source/Widget/Module/Events.js",
  "../../../Source/Widget/Module/LayoutEvents.js",
  "../../lsd-base/Source/Widget/Trait/Shy.js",
  "../../lsd-base/Source/Widget/Trait/Focus.js",
  "../../lsd-base/Source/Widget/Trait/List.js",
  "../../lsd-base/Source/Widget/Trait/Choice.js",
  "../../lsd-base/Source/Widget/Module/Attributes.js",
  "../../lsd-base/Source/Widget/Widget.js",
  "../../../Source/Widget/Widget.js",
  "../../../Source/Widget/Element.js",
  "../../../Source/Widget/Container.js",
  "../../../Source/Widget/Label.js",
  "../../../Source/Widget/Paint.js",
  "../../../Source/Widget/Window.js",
  "../../../Source/Widget/Glyph.js",
  "../../../Source/Widget/Section.js",
  "../../../Source/Widget/Footer.js",
  "../../../Source/Widget/Nav.js",
  "../../../Source/Widget/Header.js",
  "../../../Source/Widget/Form.js",
  "../../../Source/Widget/Panel.js",
  "../../../Source/Widget/Button.js",
  "../../../Source/Widget/Scrollbar.js",
  "../../../Source/Widget/Trait/Scrollable.js",
  "../../../Source/Widget/Menu.js",
  "../../../Source/Widget/Menu/Toolbar.js",
  "../../../Source/Widget/Menu/Context.js",
  "../../lsd-base/Source/Widget/Trait/Accessibility.js",
  "../../../Source/Widget/Menu/List.js",
  "../../lsd-base/Source/Widget/Trait/Observer.js",
  "../../lsd-base/Source/Widget/Trait/Value.js",
  "../../lsd-base/Source/Widget/Trait/Input.js",
  "../../../Source/Widget/Input.js",
  "../../../Source/Widget/Input/Checkbox.js",
  "../../../Source/Widget/Input/Range.js",
  "../../../Source/Widget/Input/Radio.js",
  "../../lsd-base/Source/Widget/Trait/OuterClick.js",
  "../../../Source/Widget/Trait/Menu.js",
  "../../../Source/Widget/Menu/Toolbar.Menu.js",
  "../../../Source/Widget/Input/Search.js",
  "../../../Source/Widget/Select.js",
  "../../mootools-core/Source/Request/Request.js",
  "../../cssparser/Source/CSSParser.js",
  "../../../Source/Sheet.js",
  "../Source/Application/Application.js",
  "../Source/Application/Browser.js",
  "../Source/Application/Desktop.js",
  "../Source/Application/Preferences.js",
  "../Source/Application/Network.js"
];
      if (!rekwire) rekwire = function(src) {
        document.write('<scr' + 'ipt src="' + (prefix || '') + src + '"></script>');
      }
      for (var i = 0, j = sources.length; i < j; i++) rekwire (sources[i]);
    })(window.prefix, window.loader);
