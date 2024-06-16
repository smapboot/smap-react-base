import _ from "lodash";

export const getConfig = (tipus, withTitle) => {
  let configuration;
  const showTitle = ( !_.isBoolean(withTitle) ) ? false : withTitle;

  switch ( tipus ) {
    case tipusEditor.FULL:
      configuration = {
        toolbar: {
          items: [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontBackgroundColor',
            'fontColor',
            'fontFamily',
            'fontSize',
            'highlight',
            '|',
            'outdent',
            'indent',
            'alignment',
            '|',
            'imageUpload',
            'link',
            // 'mediaEmbed',
            'undo',
            'redo',
            'imageInsert',
            '|',
            'blockQuote',
            'todoList',
            'bulletedList',
            'numberedList',
            'subscript',
            'superscript',
            '|',
            'codeBlock',
            'code',
            'sourceEditing',
            '-',
            'heading',
            '|',
            'textPartLanguage',
            '|',
            'style',
            '|',
            'showBlocks',
            '|',
            'insertTable',
            'htmlEmbed',
            '|',
            'findAndReplace',
            'removeFormat',
            '|',
            'specialCharacters',
            'pageBreak',
            'selectAll',
            'horizontalLine'
          ],
          shouldNotGroupWhenFull: true
        },
        language: 'ca',
        image: {
          toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage'
          ]
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties'
          ]
        },
      };
      break;
    case tipusEditor.MEDIUM:
      configuration = {
      toolbar: {
        items: [
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'fontBackgroundColor',
          'fontColor',
          'fontFamily',
          'fontSize',
          'highlight',
          '|',
          'outdent',
          'indent',
          'alignment',
          // 'mediaEmbed',
          '|',
          'imageUpload',
          'link',
          'undo',
          'redo',
          'imageInsert',
          '|',
          'blockQuote',
          'todoList',
          'bulletedList',
          'numberedList',
          'subscript',
          'superscript',
          '|',
          'codeBlock',
          'code',
          'sourceEditing',
          '-',
          'heading',
          '|',
          'textPartLanguage',
          '|',
          'style',
          '|',
          'showBlocks',
          '|',
          'insertTable',
          'htmlEmbed',
          '|',
          'pageBreak',
          'selectAll',
          'horizontalLine'
        ],
        shouldNotGroupWhenFull: true
      },
      language: 'ca',
      image: {
        toolbar: [
          'imageTextAlternative',
          'toggleImageCaption',
          'imageStyle:inline',
          'imageStyle:block',
          'imageStyle:side',
          'linkImage'
        ]
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells',
          'tableCellProperties',
          'tableProperties'
        ]
      }
    }
      break;
    case tipusEditor.LITE:
      configuration = {
        toolbar: {
          items: [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontBackgroundColor',
            'fontColor',
            'fontFamily',
            // 'mediaEmbed',
            'fontSize',
            'highlight'
          ],
          shouldNotGroupWhenFull: true
        }
      }
      break;
    case tipusEditor.AUTHOR:
      configuration = {
        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'fontBackgroundColor',
            'fontColor',
            'fontFamily',
            'fontSize',
            // 'mediaEmbed',
            '|',
            'imageUpload',
            'link',
            'undo',
            'redo',
          ],
          shouldNotGroupWhenFull: true
        }
      }
      break;
    default:
      configuration = {}
      break;
  }

  configuration.removePlugins = ['MediaEmbed'];

  if ( !showTitle  ) {
    configuration = {...configuration};
    configuration.removePlugins = ['Title'];
  }

  return configuration;
}

export const tipusEditor = {
  FULL: 1,
  LITE: 2,
  MEDIUM: 3,
  NONE: 4,
  AUTHOR: 5,
}
