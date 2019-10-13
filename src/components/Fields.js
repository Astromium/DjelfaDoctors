import React, { Component } from 'react';
import geni from '../images/cologue.jpg';
import derma from '../images/derma.jpg';
import general from '../images/general.jpg';
import neuro from '../images/neuro.jpg';
import orl from '../images/orl.png';
import pediatre from '../images/pediatre.png';
import radio from '../images/radiologue.png';
import uro from '../images/urologie.jpg';
import cardio from '../images/cardio.jpg';
import eye from '../images/eye.png';
import chest from '../images/chest.png';
import bones from '../images/bones.png';
import sugar from '../images/sugar.png';
import surgeon from '../images/surgeon.png';
import dentist from '../images/dentist.jpg';
import interns from '../images/internals.jpg';
import Field from './Field';
import '../css/fields.css';

class Fields extends Component {
  state = {
    fields: [
      {
        imageUrl: general,
        title: 'طب عام',
        key: 0,
        route: 'general'
      },
      {
        imageUrl: geni,
        title: 'أمراض النساء و التوليد',
        key: 1,
        route: 'genico'
      },
      {
        imageUrl: derma,
        title: 'أمراض الجلد',
        key: 2,
        route: 'dermato'
      },
      {
        imageUrl: neuro,
        title: ' أمراض الاعصاب و الرأس',
        key: 3,
        route: 'neuro'
      },
      {
        imageUrl: orl,
        title: 'أمراض الانف و الحنجرة',
        key: 4,
        route: 'orl'
      },
      {
        imageUrl: pediatre,
        title: 'أمراض الأطفال',
        key: 5,
        route: 'pedia'
      },
      {
        imageUrl: radio,
        title: ' التصوير بالأشعة',
        key: 6,
        route: 'radio'
      },
      {
        imageUrl: uro,
        title: 'أمراض المسالك البولية',
        key: 7,
        route: 'uro'
      },
      {
        imageUrl: cardio,
        title: 'أمراض القلب و الشرايين',
        key: 8,
        route: 'cardio'
      },
      {
        imageUrl: eye,
        title: 'أمراض العيون',
        key: 9,
        route: 'ophta'
      },
      {
        imageUrl: chest,
        title: 'أمراض الصدر و الجهاز التنفسي',
        key: 10,
        route: 'chest'
      },
      {
        imageUrl: bones,
        title: 'أمراض العظام و المفاصل',
        key: 11,
        route: 'bones'
      },
      {
        imageUrl: sugar,
        title: 'أمراض السكري',
        key: 12,
        route: 'diabetics'
      },
      {
        imageUrl: surgeon,
        title: 'جراحة',
        key: 13,
        route: 'surgeons'
      },
      {
        imageUrl: interns,
        title: 'أمراض داخلية',
        key: 14,
        route: 'internals'
      },
      {
        imageUrl: dentist,
        title: 'طب الأسنان',
        key: 15,
        route: 'dentists'
      }
    ]
  };
  render() {
    const { fields } = this.state;
    return (
      <div className='container'>
        <h2 className='mb-2' style={{ textAlign: 'center', padding: '2rem' }}>
          بحث على حسب التخصص
        </h2>
        <div className='row grid'>
          {fields.map(field => {
            return (
              <Field
                image={field.imageUrl}
                title={field.title}
                key={field.key}
                route={field.route}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Fields;
