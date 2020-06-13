import React, { Component } from 'react';
import './PetDetail.css';
import { getOnePet } from '../services/pets';
import { Link } from 'react-router-dom';

export default class PetDetail extends Component {
  // state = {
  //   name: '',
  //   pet_type: '',
  //   breed: '',
  //   age: 0,
  //   img_url: '',
  // };

  // getOne = async () => {
  //   let { id } = this.props.match.params;
  //   const pet = await getOnePet(id);
  //   this.setState({ ...pet });
  // };
  // componentDidMount() {
  //   this.getOne();
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.currentUser !== this.props.currentUser) {
  //     this.getOne();
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (prevState.state !== this.state) {
  //     this.getOne();
  //   }
  // }

  render() {
    console.log('render.....', this.props);
    // const { name, pet_type, breed, age, img_url } = this.state;
    const { currentPet } = this.props;
    console.log(currentPet);
    // const { name, pet_type, breed, age, img_url } = currentPet;
    return (
      <>
        {currentPet && (
          <>
            <h1>{currentPet.name}</h1>
          </>
        )}
        {/* {currentPet && (
          <div className='petDetail'>
            <img id='img' className='petDetailImage' src={img_url} alt={pet_type} />
            <div className='items-details'>
              <div className='LabelDetailLabel'>Name:</div>
              <div className='LabelDetail'>{name}</div>
              <div className='LabelDetailLabel'>Age:</div>
              <div className='LabelDetail'>{age}</div>
              <div className='LabelDetailLabel'>Breed:</div>
              <div className='LabelDetail'>{breed}</div>
              <div className='LabelDetailLabel'>Type:</div>
              <div className='LabelDetail'>{pet_type}</div>
              <div className='buttonsDetails'>
                <Link className='buttonLink' to='/pets/:id/edit'>
                  <button className='editButton'>edit</button>
                </Link>
                <button className='deleteButton'>delete</button>
              </div>
            </div>
          </div>
        )} */}
      </>
    );
  }
}
