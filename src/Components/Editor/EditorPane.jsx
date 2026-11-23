import React, {useState} from 'react';
import personalForm from './PersonalForm';
import SectionForm from './SectionForm';
import TopicManager from './TopicManager';  
import './Editor.css';

export default function EditorPane({
    personal,
    sections,
    onPersonalChange,
    onToggleSection,
    onMoveSection,
    onAddCustomTopic,
    onDeleteCustomTopic,
    onUpdateText,
    onUpdateItem,
    onAddItem,
    onRemoveItem,
}){
    const [activeTab, setActiveTab]= useState('content');
    const handleCreateTopic= (title, type)=>{
        onAddCustomTopic(title, type);
        setActiveTab('content');
    };
    return(
        <aside className='editor-pane no-print'>
            <div className='editor-tabs'>
                <button
                    type='button'
                    className={activeTab === 'content' ? 'tab active':'tab'}
                    onClick={()=> setActiveTab('content')}
                >
                    1.Edit content
                </button><button
                    type='button'
                    className={activeTab === 'content' ? 'tab active':'tab'}
                    onClick={()=> setActiveTab('topics')}
                >
                    2.Manage & Add Topics
                </button>
            </div>
            {activeTab === 'topics' ? (
                <TopicManager
                    sections={sections}
                    onToggleSection={onToggleSection}
                    onMoveSection={onMoveSection}
                    onAddCustomTopic={handleCreateTopic}
                    onDeleteCustomTopic={onDeleteCustomTopic}
                />
            ):(
                <div className='content-forms'>
                    <personalForm personal={personal} onChange={onPersonalChange}/>
                    {sections
                        .filter((sec) => sec.enabled)
                        .map((sec) => (
                            <SectionForm
                                key= {sec.id}
                                section={sec}
                                onUpdateText={onUpdateText}
                                onUpdateItem={onUpdateItem}
                                onAddItem={onAddItem}
                                onRemoveItem={onRemoveItem}
                            />
                        ))
                    }
                </div>
            )
            }
        </aside>
    )
}