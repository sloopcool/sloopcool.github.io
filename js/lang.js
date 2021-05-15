var arrLang = new Array();
arrLang['en'] = new Array();
arrLang['ru'] = new Array();

//English text
arrLang['en']['news'] = 'News';
arrLang['en']['music'] = 'Music';
arrLang['en']['tour'] = 'Tour';
arrLang['en']['more'] = 'More';
arrLang['en']['videos'] = 'Videos';
arrLang['en']['shop'] = 'Shop';
arrLang['en']['the title'] = 'The Disturbed';
arrLang['en']['the discription'] = 'Disturbed is an American heavy metal band formed in 1994 from Chicago, Illinois. In 1996 singer Erich Awalt was replaced by David Draiman and the band was renamed “Disturbed”. Disturbed is most famously known for their songs Down With The Sickness and their cover of The Sound of Silence. Disturbed went on hiatus in July 2011, to get a break from touring, but started to miss it and engaged in some side projects; Device, Fight Or Flight, Adrenaline Mob and Art Of Anarchy. Disturbed returned in 2015 announcing their returnwith their new album – Immortalized, which was recorded in secret and releasing the first single from the album, The Vengeful One, in advance. Immortalized was Disturbed’s fifth straight No. 1-debuting studio album on Billboard 200, making them the third group in history to have achieved five consecutive studio albums at No. 1. The other two being Metallica and Dave Matthews Band.'

//Russian text
arrLang['ru']['news'] = 'Новости';
arrLang['ru']['music'] = 'Музыка';
arrLang['ru']['tour'] = 'Концерты';
arrLang['ru']['more'] = 'Раскрыть';
arrLang['ru']['videos'] = 'Видео';
arrLang['ru']['shop'] = 'Магазин';
arrLang['ru']['the title'] = 'Disturbed';
arrLang['ru']['the discription'] = 'Disturbed - Американская хеви-метал группа, основанная в 1994 году в Чикаго. В 1996 году фронт-мэн группы Эрих Авальт покинул группу, на его место пришел Дэвид Дрейман, группа была переименована в Disturbed. Distrubed наиболее известны благодарая песне Down With The Sickness и их каверу на песню The Sound of Silence. В июле 2011 года участники взяли перерыв от концертного тура, однако учавствовали в сторонних проектах, таких как Device, Fight Or Flight, Adrenaline Mob and Art Of Anarchy и др. Disturbed собрались вновь лишь в 2015 году, анонсировав свой новый альбом - Immortalized, который был записан тайно, и выпустив первый синг с альбома - The Vengeful One. Immortalized был пятым подряд студийным альбомом группы, занявшим первое место на Billboard 200. Благодаря этому Disturbed стала третьей группой в истории, у который были пять альбомов, занявшим первые места на Billboard 200.';

//Initialisation process
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});