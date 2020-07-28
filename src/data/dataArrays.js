export const categories = [
  {
    id: 3,
    name: 'Виды слаймов',
    photo_url:'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400',
    categories_screen_name: 'Рецепты по видам слаймов'

  },
  {
    id: 1,
    name: 'Компоненты',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
    categories_screen_name: 'Рецепты по ингредиентам'

  },
];

//categoryid - 3 - по видам слаймов
//categoryid - 1 - по ингредиентам

export const recipes = [
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Clear слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[1, '200 мл'], [2, '250 мл'], [3, '2 чайные ложки']],
    description:
      `Клиар слайм не имеет цвета, так как изготавливается из прозрачного клея.Его также называют кристаллом или стеклом, но чтобы он был действительно таковым, нужно выбрать хороший клей. \n\n Обратите внимание на прозрачные клеи фирм Brauberg, Erich krause, Elmers, Berlingo. Клей должен быть свежим, густым по консистенции. \n\n 1. Сначала нужно сделать активатор, для этого берем чистую чашу и смешиваем в ней тетраборат с водой. \n\n 2. Затем медленно вливаем наш клей. Делаем аккуратно, чтобы было как можно меньше пузырьков воздуха. Специальной ложечкой или лопаточкой медленно смешиваем клей и активатор, пока клей не свернется. \n\n 3. Затем лишнюю жидкость сливаем и радуемся готовому слайму. Если в нашем лизуне очень много пузырьков, то плотно закройте его в таре и уберите в холодильник на 2 суток. За это время часть пузырьков исчезнет и слайм станет более чистым. \n`
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Оригинальный слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '100 мл'], [5, ''], [6, '2 столовые ложки'],[7, '1 чайная ложка '],[2, '150 мл воды']],
    description:
      `1. Делаем активатор, смешиваем примерно 1 ч.л. тетрабората и 50мл. воды. \n\n 2. В чистой таре смешиваем клей и краситель. \n\n 3. Добавляем крем и перемешиваем. \n\n 4. В конце добавляем активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм, пока он не будет готов. \n`
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Глянцевый слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '100 мл'], [6, '2 столовые ложки'], [8, '1 чайная ложка'], [5, ''], [7, '1 чайная ложка '],[2, '150 мл воды']],
    description:
      `Глянцевый слайм отличается гладкостью и красивым блеском от других слаймов. Очень хорошо тянется и не липнет к рукам. \n\n 1. Делаем активатор, смешиваем примерно 1 ч.л. тетрабората и 50мл. воды. \n\n 2. В чистой емкости смешиваем клей и краситель. \n\n 3. Добавляем крем и масло, тщательно вымешиваем. \n\n 4. В конце добавляем активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм, пока он не будет готов. \n\n 5. Если слайм плохо тянется или недостаточно блистит, можно добавить еще масла и крема, но понемногу.`
  },
  {
    recipeId: 4,
    categoryId: 3,
    title: 'Снежный слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '50 мл'], [3, '1 чайная ложка'], [2, '50 мл'], [5, ''], [8, '']],
    description:
      `Снежный или Сноу слайм получил свое название из-за сходства со снегом, и потому что в составе используется растущий снег. \n\n 1. Готовим активатор, смешав тетраборат с водой. \n\n 2. В отдельную чистую чашу выливаем клей (если клей очень густой, слегка разбавляем водой), добавляем краситель по желанию (краситель желательно пищевой или акриловые краски), перемешиваем. \n\n 3. Добавляем в нашу массу, готовый растущий снег (предварительно добавляем в него воду), если нет растущего снега, можно добавить просто искусственный снег. \n\n 4. В хорошо вымешанную массу понемногу добавляем наш активатор и тщательно и долго вымешиваем слайм до его готовности. \n\n 5. Если хотите более пушистый снежный слайм, можно добавить немного пены для бритья, пару пшиков.`
  },
  {
    recipeId: 5,
    categoryId: 3,
    title: 'Слайм с губкой',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '100 мл'], [7, '1 чайная ложка '],[2, '150 мл воды'], [9, '50 мл'], [5, '']],
    description:
      `Лизун с добавлением губки очень прикольный в игре и хрустящий. Губку можно использовать обычную, меламиновую или флористическую, с каждой будет разный эффект, попробуйте все. Губка предварительно нарезается на квадратики или прямоугольники небольшого размера. \n\n 1. Как обычно делаем активатор, смешиваем примерно 1 ч.л. тетрабората и 50мл. воды. \n\n 2. Вливаем клей в чистую ёмкость, добавляем краситель по желанию, перемешиваем. \n\n 3. Добавляем наш активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм, пока он не будет готов. \n\n 4. Добавляем кусочки, предварительно нарезанной губки. Очень много добавлять не нужно. т\n\n 5. Наслаждаемся слаймом.`
  },
  {
    recipeId: 6,
    categoryId: 3,
    title: 'Баттер слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '100 мл'], [5, ''], [6, '2 столовые ложки'], [7, '1 чайная ложка '],[2, '150 мл воды']],
    description:
      `Переводится как слайм масло, тающий, но очень воздушный лизун, имеет более матовую структуру. Этот лизун интересно растекается по поверхности как масло, благодаря легкой глине или по-другому лёгкий пластилин. Сначала делаем ориджинал слайм, затем добавляем пластилин. \n\n 1. Делаем активатор, смешиваем примерно 1 ч.л. тетрабората и 50мл. воды.\n\n 2. В чистой таре смешиваем клей и краситель. \n\n 3. Добавляем крем и перемешиваем.\n\n 4. В конце добавляем активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм. \n\n 5. Когда слайм будет готов, добавляем легкую глину или легкий пластилин, вымешиваем до однородности.`
  },
  {
    recipeId: 7,
    categoryId: 3,
    title: 'Флаффи слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '100 мл'], [5, ''], [6, '2 столовые ложки'],[10, ''],[6, ''],[7, '1 чайная ложка '],[2, '150 мл воды']],
    description:
      `Переводится с английского, как пушистый слайм. Еще называется лизун облако из-за своей воздушной текстуры, благодаря пене для бритья. \n\n 1. Делаем активатор, смешиваем примерно 1 ч. л. тетрабората и 50мл. воды. \n\n 2. В чистой таре смешиваем клей и краситель.  \n\n 3. Добавляем крем и перемешиваем. \n\n 4. Добавляем пену, количество по вашему желанию, перемешиваем. \n\n 5. В конце добавляем активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм, пока он не будет готов.`
  },
  {
    recipeId: 8,
    categoryId: 3,
    title: 'Песочный слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[1, '100 мл'], [11, '2 столовые ложки'], [12, ''],[7, '1 чайная ложка '],[2, '150 мл воды']],
    description:
      `Песочный лизун или сэнд слайм имеет очень приятную текстуру и крутой эффект антистресса. \n\n  1. Делаем активатор, смешиваем примерно 1 ч. л. тетрабората и 50мл. воды. \n\n 2. В чистой таре смешиваем клей и гель для душа, перемешиваем.  \n\n 3. Добавляем кинетический песок, смешиваем. \n\n 4. В конце добавляем активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм, пока он не будет готов.`
  },
  {
    recipeId: 9,
    categoryId: 3,
    title: 'Кранчи слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '100 мл'], [13, '2 столовые ложки'], [10, '30 мл'], [14, ''],[7, '1 чайная ложка '],[2, '150 мл воды']],
    description:
      `Кранчи слайм - это лизун с множеством шариков, которые дают крутой расслабляющий эффект. Шарики можно использовать любые: стеклянные, пенопластовые, пластиковые или микробисер. Кстати микробисер даёт просто нереальный массажный эффект. А с пенопластовыми шариками слайм забавно хрустит. \n\n 1. Делаем активатор, смешиваем примерно 1 ч. л. тетрабората и 50мл. воды. \n\n 2. В чистой таре смешиваем клей, шампунь и пену, перемешиваем. \n\n 4. Добавляем активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм, пока он не будет готов. \n\n 5. В конце добавляем наши шарики и играем с крутым слаймом.`
  },
  {
    recipeId: 10,
    categoryId: 3,
    title: 'Айсберг слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '100 мл'], [10, '40 мл'], [5, ''],[7, '1 чайная ложка '],[2, '150 мл воды']],
    description:
      `Айсберг слайм - это лизун, покрытый сверху твердой корочкой. Верхушка затвердевшего слайма прикольно хрустит и разламывается, как лёд, поэтому и такое название. \n\n 1. Делаем активатор, смешиваем примерно 1 ч. л. тетрабората и 50мл. воды. \n\n 2. В чистой таре смешиваем клей, краситель и пену, перемешиваем. Если хотите слайм более пышный, то добавьте еще пены.  \n\n 3. Добавляем активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм, пока он не будет готов. \n\n 5. Кладем слайм в тару, но не закрываем крышкой и убираем в темное место на 12 часов, если слайм не застыл сверху, то оставьте его еще на день, пока он не засохнет сверху. Но помните, что от этого слайм высыхает и портится и вряд ли вы сможете потом играть с ним полноценно.`
  },
  {
    recipeId: 11,
    categoryId: 3,
    title: 'Магнитный слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '50 мл'],[7, '1 чайная ложка '],[2, '150 мл воды'],[15, ''],[16, ''] ],
    description:
      `Магнитный слайм имеет в своем составе магнитную стружку, поэтому с ним можно прикольно играть магнитом. \n\n 1. Делаем активатор, смешиваем примерно 1 ч. л. тетрабората и 50мл. воды.\n\n 2. В чистой таре смешиваем клей и магнитную стружку, перемешиваем. \n\n 3. Добавляем активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм, пока он не будет готов. \n\n 4. Играйте готовым слаймом магнитом.`
  },
  {
    recipeId: 12,
    categoryId: 3,
    title: 'Светящийся слайм',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[1, '50 мл'],[17, ''],[7, '1 чайная ложка '],[2, '150 мл воды']],
    description:
      `Хотите лизуна, который светится? Это возможно, благодаря специальным красителям, которые вы можете купить в магазине канцтоваров или для творчества. Если вы хотите слайм, который светится в темноте, вам нужна люминесцентная краска, но этот слайм будет заряжаться на солнце, и только потом светиться в темноте. А если хотите, чтобы светился в ультрафиолете, то нужна флуоросцентная краска. \n\n 1. Делаем активатор, смешиваем примерно 1 ч. л. тетрабората и 50мл. воды. \n\n 2. В чистой таре смешиваем клей и краситель, перемешиваем. \n\n 3. Если хотите, чтобы слайм был более воздушный можно добавить немного пены для бритья. \n\n 4. Добавляем активатор, постепенно и понемногу, постоянно и долго вымешиваем наш слайм, пока он не будет готов. `
  },
  {
    recipeId: 13,
    categoryId: 1,
    title: 'Без клея 1 рецепт',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[19, ''], [6, '4 чайные ложки'],[20, '3 чайные ложки'],[5, ''],[21, '']],
    description:
      `1. Кладем в чистую емкость 6 ч.л. крахмала, весь крем и краситель, смешиваем тщательно ложкой.\n\n 2. Затем кладем мыло и хорошо перемешиваем, если слайм жидкий, то добавьте еще крахмал. \n\n 3. Дальше будем вымешивать руками, но надо их присыпать крахмалом. Мнем слайм, пока он не станет однородным. Если сильно липнет, можете смазать его детским маслом чуть-чуть.`
  },
  {
    recipeId: 14,
    categoryId: 1,
    title: 'С пеной',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[7, '1 чайная ложка '],[2, '150 мл воды'], [10, ''], [4, '60 мл'],[5, 'по желанию']],
    description:
      `1. Выливаем в чистую чашу клей. \n\n 2. обавляем пены сколько хотим и краситель, перемешиваем. \n\n 3. Загущаем слайм активатором понемногу, капаем активатор и тщательно вымешиваем слайм, если это нужно, то добавляем еще активатора.`
  },
  {
    recipeId: 15,
    categoryId: 1,
    title: 'С кремом для рук',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[7, '1 чайная ложка '],[2, '150 мл воды'], [6, '2 чайные ложки'], [4, '60 мл'],[5, 'по желанию']],
    description:
      `1. Выливаем в чистую чашу клей. \n\n 2. Добавляем крем и краситель, перемешиваем.\n\n 3. Загущаем слайм активатором понемногу, капаем активатор и тщательно вымешиваем слайм, если это нужно, то добавляем еще активатора и снова мнем слайм.`
  },
  {
    recipeId: 16,
    categoryId: 1,
    title: 'С детским маслом',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[7, '1 чайная ложка '],[2, '150 мл воды'], [21, '1 чайные ложки'], [4, '60 мл'],[5, 'по желанию']],
    description:
      `1. Выливаем в чистую чашу клей. \n\n 2. Добавляем масло и краситель, перемешиваем. \n\n 3. Загущаем слайм активатором понемногу, капаем активатор и тщательно вымешиваем слайм, если это нужно, то добавляем еще активатора и снова мнем слайм. \n\n 4. Если салйм слишком тугой, то добавьте еще масла.`
  },
  {
    recipeId: 17,
    categoryId: 1,
    title: 'С жидким мылом',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[7, '1 чайная ложка '],[2, '150 мл воды'], [20, '2 чайные ложки'], [4, '60 мл'],[5, 'по желанию']],
    description:
      `1. Выливаем в чистую чашу клей. \n\n 2. Добавляем масло и краситель, перемешиваем. \n\n 3. Загущаем слайм активатором понемногу, капаем активатор и тщательно вымешиваем слайм, если это нужно, то добавляем еще активатора и снова мнем слайм. \n\n 4. Если салйм слишком тугой, то добавьте еще масла.`
  },
  {
    recipeId: 18,
    categoryId: 1,
    title: 'С шампунем',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[13, 'прозрачный Пантил - 20 мл'], [18, '100 мл'], [22, '']],
    description:
      `1. Выливаем в чистую чашу шумпунь и маску, перемешиваем. \n\n 2. Быстро загущаем слайм (т.к. маска-пленка быстро сохнет) порошком понемногу и вымешиваем слайм, если это нужно, то добавляем еще порошка и снова мнем слайм.`
  },
  {
    recipeId: 19,
    categoryId: 1,
    title: 'С содой',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '60 мл'], [20, '1 столовая ложка'], [23, '']],
    description:
      `1. В сухую и чистую емкость выливаем жидкое мыло, добавляем клея ПВА, перемешиваем. \n\n 2. Добавляем щепотку соды и продолжаем смешивать. \n\n 3. Слайм должен быть тянущимся, если масса не густеет, добавьте еще немного соды.`
  },
  {
    recipeId: 20,
    categoryId: 1,
    title: 'С зубной пастой',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '60 мл'], [24, 'Тюбик зубной пасты любой']],
    description:
      `1. В ёмкость выдавите необходимое вам количество пасты. \n\n 2. Добавьте небольшую часть клея и перемешайте. Если паста не начнет густеть, то добавьте еще столько же клея. \n\n 3. 3. Мешайте тщательно до тех пор, пока масса не начнет загустевать и отставать от стенок посуды, добавляя по чуть-чуть клея. \n\n 4. Уберите чашу с лизуном в холодильник на 15 минут. Затем достаньте слайм из холодильника и возьмите его в руки. Начните разминать до тех пор, пока масса не станет однородной.`
  },
  {
    recipeId: 21,
    categoryId: 1,
    title: 'С солью',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[13, ''], [25, '']],
    description:
      `Это один из простых способов, но он будет больше похож на желе. \n\n 1.В чистую тару влейте 4 столовых ложки шампуня; \n\n 2. Загущайте его солью. Сыпьте соль щепотками и хорошо перемешивайте. Сыпьте соль до тех пор, пока масса не начнет густеть; \n\n 3. Как только она перестанет быть липкой, можно добавить краситель по желанию; \n\n 4. Уберите лизуна в холодильник на пару часов, затем можно играть`
  },
  {
    recipeId: 22,
    categoryId: 1,
    title: 'С освежителем',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[4, '7 столовых ложек'], [5, 'по желанию'],[5, 'по желанию'] ],
    description:
      `Это один из простых способов, но он будет больше похож на желе. \n\n 1.В чистую тару влейте 4 столовых ложки шампуня; \n\n 2. Загущайте его солью. Сыпьте соль щепотками и хорошо перемешивайте. Сыпьте соль до тех пор, пока масса не начнет густеть; \n\n 3. Как только она перестанет быть липкой, можно добавить краситель по желанию; \n\n 4. Уберите лизуна в холодильник на пару часов, затем можно играть`
  },
  {
    recipeId: 23,
    categoryId: 1,
    title: 'Без клея 2 рецепт',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[2, '100 мл'], [3, '1 чайная ложка'],[18, ''] ],
    description:
      `1. В чистой таре смешиваем воду и тетраборат. \n\n 2. Аккуратно добавляем маску-пленку, для начала добавьте 4 ст. л. или смотрите на глаз. Помните массу руками. \n\n 3. Достаньте готовый слайм и положите в сухую чашу, оставьте отдохнуть на 15 минут. Затем можно играть. \n\n 4. Если лизун жидкий, то добавьте еще тетрабората, разведенного с водой. Если слайм очень жесткий, добавьте еще воды.`
  },
  {
    recipeId: 24,
    categoryId: 1,
    title: 'С порошком',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[2, '60 мл'], [3, '1 столовая ложка'],[18, '1 чайная ложка(по мере необходимости)'] ],
    description:
      `1. В емкости хорошо размешиваем наш клей. \n\n 2. В него вливаем порошок и размешиваем до получения однородной массы. На этом этапе смесь становится гуще. Оставляем массу в холодильнике на 15 минут, а затем снова хорошо вымешиваем. \n\n 3. Если лизун продолжает липнуть к рукам, добавляем в массу 1 чайную ложку соды. Если слайм всё еще жидкий, в таком случае необходимо повторно ввести в массу гель для стирки и оставить субстанцию в холодильнике на 30 минут. Готовый слайм из стирального порошка немного напоминает эластичную резину.`
  },
  {
    recipeId: 25,
    categoryId: 1,
    title: 'Без тетрабората',
    photo_url: require('../../assets/RecipesImages/butter-slime-min.jpg'),
    photosArray: [
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg'),
      require('../../assets/RecipesImages/butter-slime-min.jpg')
    ],
    time: '15',
    ingredients: [[26, '2 чайные ложки'], [4, '4 столовая ложка'],[23, '1 щепотка'],[2, '1 чайная ложка'],[5, 'по желанию'] ],
    description:
      `Как сделать ориджинал с клеем и глазными каплями: \n\n 1. В чистую емкость выливаем клей и мешаем его. \n\n 2. В отдельной таре смешиваем воду и соду, добавляем раствор в клей.\n\n 3. Добавляем краситель. \n\n 4. Загущаем слайм с помощью капель для глаз. Добавлять активатор необходимо понемногу, иначе лизун слишком уплотнится, станет «резиновым».Если в данном рецепте вместо ПВА использовать канцелярский клей, то лизун получится с легкой прозрачностью.`
  }
];

export const ingredients = [
  {
    ingredientId: 1,
    name: 'Канцелярский прозрачный клей',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 2,
    name: 'Вода',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 3,
    name: 'Тетраборат натрия',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 4,
    name: 'Клей ПВА',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 5,
    name: 'Краситель',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 6,
    name: 'Крем для тела или для рук',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 7,
    name: 'Тетраборат',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 8,
    name: 'Растущий снег или искусственный снег',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 9,
    name: 'Кусочки губки',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 10,
    name: 'Пена для бритья',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 11,
    name: 'Гель для душа или жидкое мыло',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 12,
    name: 'Кинетический песок',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 13,
    name: 'Шампунь',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 14,
    name: 'Шарики',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 15,
    name: 'Порошок оксида железа (по-другому магнитная стружка или железный порошок)',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },  
  {
    ingredientId: 16,
    name: 'Магнит',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 17,
    name: 'Люминесцентная краска',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 18,
    name: 'Маска-плёнка',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Картофельный крахмал',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 20,
    name: 'Жидкое мыло',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 21,
    name: 'Детское масло',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 22,
    name: 'Жидкий порошок Персил или Perwoll',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 23,
    name: 'Пищевая сода',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 24,
    name: 'Зубная паста',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 25,
    name: 'Соль',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 26,
    name: 'нафтизиин или левомицетин(или глазные капли с борной кислотой в составе)',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  }
];


export const instructions = {
  'rus':`1. Главное в слайме - это клей. Он должен быть свежий, густой по текстуре. Далеко не все клеи подходят, прежде чем выливать весь тюбик, проверьте на маленькой части, работает ли он. Придется поискать свой клей, который будет работать.
  Обратите внимание на марки: Brauberg, Erich krause, Elmers, Berlingo, Луч. 
  В рецептах мы используем канцелярский клей, он прозрачный и густой, используется в клиар слайме.
  В большинстве рецептов идет клей ПВА, он белого цвета. Если ваш клей очень и очень густой, разбавьте его водой, но только не переборщите!
  
  2. Емкость и ложка для смешивания слайма должны быть отдельные и чистые, есть этой посудой больше нельзя.
  
  3. В качестве активатора мы используем тетраборат натрия (продается в аптеке), разбавленный водой. На 50 мл. воды идет 1 ч.л. тетрабората. Используйте его осторожно, не допускайте попадания в рот и в глаза. Если вы используйте неразбавленный тетраборат, то добавляйте его по капле в слайм и долго вымешивайте слайм.
  
  4. Красители для слайма лучше всего использовать пищевые, либо акриловые краски, либо специальные красители.
  
  5. Краситель и ароматизатор лучше добавлять до активатора, а добавки в виде шариков и губок и т.п. после загущения слайма.
  
  6. Если слайм очень плохо тянется можно добавить воды. Лучше налить теплую воду в ёмкость и опустить туда слайм, месить его ,пока не станет мягким. Также можно добавить крем для тела или для рук, или детское масло, или глицерин, но немного.
  
  7. Если слайм очень жидкий, добавьте еще активатора.
  
  8. Чтобы слайм лучше сохранился, храните его в плотно закрытой таре, в холодном темном месте. Лучше в холодильнике.
  
  9. Также вы можете добавлять в свой слайм ароматизатор по желанию, но помните что они могут вызывать аллергию.
  
  10. И помните со слаймом лучше играть чистыми руками и на чистой поверхности. Не давайте игрушку детям младше 5 лет и не берит ее в рот.`



}
