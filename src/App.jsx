import React from 'react';
import {useCvState} from './hooks/useCvState';
import {exportCvToPdf} from './utils/pdf';
import Topbar from './Components/Editor/EditorPane';
import PreviewPane from './Components/Preview/PreviewPane';

export default function App(){
  const cv= useCvState();
  return (
    <div className="app-shell">
      <Topbar 
        selectedFont= {cv.selectedFont}
        selectedSize= {cv.selectedSize}
        onFontChange={cv.setSelectedFont}
        onSizeChange={cv.setSelectedSize}
        onReset={cv.resetAll}
        onDownload= {()=> exportCvToPdf(cv.personal.fullName)}
      />
      <main className= "workspace">
        <EditorPane
          personal={cv.personal}
          sections={cv.sections}
          onPersonalChange={cv.updatePersonal}  
          onToggleSection={cv.toggleSection}
          onMoveSection={cv.moveSection}
          onAddCustomTopic={cv.addCustomTopic}  
          onDeletedCustomTopic={cv.deleteCustomTopic} 
          onUpdateText={cv.updateTextContent}
          onUpdateItem={cv.updateListItem}
          onAddItem={cv.addListItem}
          onRemoveItem={cv.removeListItem}
        />
         <PreviewPane
          personal={cv.personal}
          sections={cv.sections}
          selectedFont={cv.selectedFont}
          selectedSize={cv.selectedSize}
         />
      </main>

    </div>
  );
}