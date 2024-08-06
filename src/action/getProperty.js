// import React from "react";

export default function getProperty() {
  try {
    const data = [
      {
        id: 1,
        title: "Seaside Serenity Villa",
        desc: "Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
        features: {
          no_of_bedroom: 3,
          no_of_bathroom: 2,
          type: "Villa",
        },
        price: '500.000',
      },
      {
        id: 2,
        title: "Metropolitan Haven",
        desc: "Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
        features: {
          no_of_bedroom: 4,
          no_of_bathroom: 2,
          type: "Appartment",
        },
        price: 500,
      },
      {
        id: 3,
        title: "Seaside Serenity Villa",
        desc: "Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
        features: {
          no_of_bedroom: 3,
          no_of_bathroom: 2,
          type: "Banglow",
        },
        price: 500,
      },
      {
        id: 4,
        title: "Rustic Retreat Cottage",
        desc: "Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
        features: {
          no_of_bedroom: 4,
          no_of_bathroom: 2,
          type: "House",
        },
        price: 500,
      },
    ];
    return data;
  } catch (error) {
    return error;
  }
}
