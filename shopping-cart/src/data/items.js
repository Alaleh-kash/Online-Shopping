const productList =[
    {
        id: '1',
        title: 'AirPods Pro',
        price: 199,
        image: '/images/airpods.jpg',
      },
      {
        id: '2',
        title: 'iPad',
        price: 499,
        image: '/images/ipad.jpg',
      },
      {
        id: '3',
        title: 'MacBook Pro',
        price: 1999,
        image: '/images/macbook.jpg',
      },
      {
        id: '4',
        title: 'iPhone 14 Pro',
        price: 899,
        image: '/images/phone.jpg',
      },
      {
        id: '5',
        title: 'Headphone',
        price: 599,
        image: '/images/headphone.jpg',
      },
      {
        id: '6',
        title: 'Magic Mouse',
        price: 299,
        image: '/images/mouse.jpg',
      },
      {
        id: '7',
        title: 'Watch',
        price: 499,
        image: '/images/watch.jpg',
      },
      {
        id: '8',
        title: 'Microphone',
        price: 699,
        image: '/images/mic.jpg',
      },
]

function getProductData(id){
    let productDate = productList.find((item) => item.id === id)
    return productDate

}

export { productList, getProductData }