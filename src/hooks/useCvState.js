
import {useState, useEffect} from 'react';
import {
    INITIAL_PERSONAL,
    INITIAL_SECTIONS,
    PROFESSIONAL_FONTS,
    FONT_SIZES,
} from '../data/defaults';

export function useCvState(){
    const [personal, setPersonal]= useState(() => {
        const saved= localStorage.getItem('cv_personal');
        return saved ? JSON.parse(saved): INITIAL_PERSONAL;
    });

    const [sections, setSections]= useState(() => {
        const saved= localStorage.getItem('sections');
        return saved ? JSON.parse(saved): INITIAL_SECTIONS;
    });

    const [selectedFont, setSelectedFont]=useState(() => {
        return localStorage.getItem('cv_font')|| PROFESSIONAL_FONTS[0].value;
    });

    const [selectedSize, setSelectedSize]= useState(() => {
        return localStorage.getItem('cv_size')|| FONT_SIZES[1].value;
    });

    useEffect(() => {
        localStorage.setItem('cv_personal', JSON.stringify(personal));
    }, [personal]);

    useEffect(() => {
        localStorage.setItem('cv_sections', JSON.stringify(sections));
    }, [sections]);

    useEffect(() => {
        localStorage.setItem('cv_font', selectedFont);
    }, [selectedFont]);

    useEffect(() => {
        localStorage.setItem('cv_size', selectedSize);
    }, [selectedSize]);

    const updatePersonal= (name, value) =>{
        setPersonal((prev) => ({ ...prev, [name]: value}));
    };

    const toggleSection = (id) => {
        setSections((prev) => 
             prev.map((sec) => (sec.id === id? { ...sec, enabled: !sec.enabled} : sec ))
        );
    };

    const moveSection=(index, direction) => {
        const targetIndex= index + direction;
        if(targetIndex <0 || targetIndex >= sections.length) return;
        const updated =[ ...sections];
        [updated[index], updated[targetIndex]] = [updated[targetIndex], updated[index]];
        setSections(updated);
    };

    const addCustomTopic= (title, type) => {
        const newSection= {
            id: `custom-${Date.now()}`,
            title: title.trim(),
            enabled: true,
            type,
            ...(type === 'text'
                ? {content: ''}
                :{
                    items:[
                        {
                            id: `item-${Date.now()}`,
                            heading:'Title/ Role/ Certification',
                            subheading: 'Organization/ institution',
                            date:'Start Date - End Date',
                            description: 'Key details or achievements ...',
                        },
                    ],
                }
            ),
        };

        setSections((prev) => [...prev, newSection]);
    };

    const deleteCustomTopic =(id) => {
        setSections((prev) => prev.filter((sec) => sec.id !==id));
    };

    const updateTextContent = (sectionId, value) => {
        setSections((prev) => prev.map((sec) => (sec.id === sectionId ? { ...sec, content: value}: sec)));
    };

    const updateListItem = (sectionId, itemId, field, value) => {
        setSections((prev) => prev.map((sec)=> {
            if(sec.id !== sectionId) return sec;
            return{
                ...sec,
                items:sec.items.map((item)=> item.id ===itemId ? { ...item, [field]:value}:item),
            };
        }));
    };

    const addListItem = (sectionId) => {
        setSections((prev) => prev.map((sec) => {
            if (sec.id !== sectionId) return sec;
            return {
                ...sec,
                items: [
                    ...sec.items,
                    {
                        id: `item-${Date.now()}`,
                        heading: '',
                        subheading:'',
                        date:'',
                        description:'',
                    },
                ],
            };
        }));
    };

    const removeListItem= ( sectionId, itemId) => {
        setSections((prev) => prev.map((sec)=>{
            if(sec.id !== sectionId) return sec;
            return {
                ...sec,
                items: sec.items.filter((item) => item.id !==itemId),
            };
        }));
    };

    const resetAll = () => {
        if(window.confirm ('Reset all cv data to default?')){
            localStorage.removeItem('cv_personal');
            localStorage.removeItem('cv_sections');
            localStorage.removeItem('cv_font');
            localStorage.removeItem('cv_size');
            setPersonal(INITIAL_PERSONAL);
            setSections(INITIAL_SECTIONS);
            setSelectedFont(PROFESSIONAL_FONTS[0].value);   
            setSelectedSize(FONT_SIZES[1].value);
        }
    };

    return {
        personal,
        sections,
        selectedFont,
        selectedSize,
        setSelectedFont,
        setSelectedSize,
        updatePersonal,
        toggleSection,
        moveSection,
        addCustomTopic,
        deleteCustomTopic,
        updateTextContent,
        updateListItem,
        addListItem,
        removeListItem,
        resetAll,
    };
}
