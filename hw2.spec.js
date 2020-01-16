
describe('hw2.js -> palindrom -> the line should be read the same on both sides', function () {
  it('Base test', function () {
    expect(palindrom('123454321')).toBe(true);
    expect(palindrom('asdffdsa')).toBe(true);
    expect(palindrom('asdfghjk')).toBe(false);
  });
});



describe('hw2.js -> getLastName -> ', function () {

  it('should return lastName', function () {
    let lastName = 'sdfghj';
    spyOn(window, 'prompt').and.returnValue(lastName);
    expect(getLastName()).toBe(lastName)
  });
  it('should return null', function () {
    let lastName = '';
    spyOn(window, 'prompt').and.returnValue(lastName);
    expect(getLastName()).toEqual(null);
  });
});

describe('hw2.js -> getFirstName -> ', function () {

  it('should return firstName', function () {
    let firstName = 'qwerty';
    spyOn(window, 'prompt').and.returnValue(firstName);
    expect(getFirstName()).toBe(firstName)
  });
  it('should return null', function () {
    let firstName = '';
    spyOn(window, 'prompt').and.returnValue(firstName);
    expect(getFirstName()).toEqual(null);
  });
});

 describe('hw2.js -> getPatronymic -> ', function () {

  it('should return patronymic', function () {
    let patronymic = 'lkjhgf';
    spyOn(window, 'prompt').and.returnValue(patronymic);
    expect(getPatronymic()).toBe(patronymic)
  });
  it('should return null', function () {
    let patronymic = '';
    spyOn(window, 'prompt').and.returnValue(patronymic);
    expect(getPatronymic()).toEqual(null);
  });
});

 describe('hw2.js -> getAge -> ', function () {

  it('should return null', function () {
    let age = -1;
    spyOn(window, 'prompt').and.returnValue(age);
    expect(getAge()).toBe(null)
  });
  it('should return null', function () {
    let age = 'asdfg';
    spyOn(window, 'prompt').and.returnValue(age);
    expect(getAge()).toEqual(NaN);
  });
  it('should return age', function () {
    let age = 1;
    spyOn(window, 'prompt').and.returnValue(age);
    expect(getAge()).toEqual(age);
  });
});

describe('hw2.js -> getDayOld', function() {
	it('should return days and years', function() {
		expect(getDayOld('23')).toEqual({old: 28, day: 8395});
	});
});

describe('hw2.js -> getSex', function() {
	it('should return "мужской" when "true"', function() {
		let val = true;
		spyOn(window, 'confirm').and.returnValue(val);
		expect(getSex()).toBe(sex = 'мужской');
	});
	it('should return "женский" when "false"', function() {
		let val = false;
		spyOn(window, 'confirm').and.returnValue(val);
		expect(getSex()).toBe(sex = 'женский');
	});
});

describe('hw2.js -> getPension', function() {
  let age;
  let sex;
	beforeEach(function() {
    age = 57;
    sex == 'женский';
    getAge(spyOn(window, 'prompt').and.returnValue(age));
    getSex(spyOn(window, 'confirm').and.returnValue(sex));
  });
	it('should return да', function() {
		expect(getPension()).toBe(pension = 'да');
	});
});

// describe('hw2.js -> getPension', function() {
//   let age;
//   let sex;
// 	beforeEach(function() {
//     age = 55;
//     sex == 'мужской';
//     getAge(spyOn(window, 'prompt').and.returnValue(age));
//     getSex(spyOn(window, 'confirm').and.returnValue(sex));
//   });
// 	it('should return нет', function() {
// 		expect(getPension()).toBe('нет');
// 	});
// });



describe('hw2.js -> palindrom -> the line should be read the same on both sides', function () {
  it('Base test', function () {
    expect(palindrom('123454321')).toBe(true);
    expect(palindrom('asdffdsa')).toBe(true);
    expect(palindrom('asdfghjk')).toBe(false);
  });
});
