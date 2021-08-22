# Инструкция

## Подготовка

1. Включите робота
2. Вставьте Ethernet
3. Откройте параметры адаптера

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled.png)

4. Нажмите правой кнопкой мыши по адаптеру Ethernet

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%201.png)

5. Потом нажмите на IP версии 4

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%202.png)

6. Введите всё как показано на скриншоте

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%203.png)

7. И нажмите ок если вылезет что то ещё нажмите ок
8. Всё готово к запуску

## Основная часть

1. Нажмите `Win+R`
2. У вас открое/тся окно *Выполнить.* Введите `cmd` , как показано на скриншоте

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%204.png)

1. Нажмите *ОК*. Откроется командная строка.

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%205.png)

2. Введите `ssh pi@raspberrypi`

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%206.png)

3. Нажмите *Enter*

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%207.png)

4. Введите `raspberry` и нажмите Enter

    ![cmd_P9rzD25JtL.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/cmd_P9rzD25JtL.png)

5. Введите `cd TrumpetHoler/src/server` и нажмите *Enter*

    ![cmd_UMDBnoAYXe.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/cmd_UMDBnoAYXe.png)

    ![cmd_AAy50eVCAj.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/cmd_AAy50eVCAj.png)

6. Введите `python3 [main.py](http://main.py)--port /dev/ttyACM0 --cam /dev/video0` и нажмите Enter

    ![cmd_fmNU3tAAZn.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/cmd_fmNU3tAAZn.png)

7. Всё готово, если возникнет ошибка, то перезагрузите робота, а после [перейдите к пункту 4]()
8. Теперь необходимо установить программу. Скачайте [программу от сюда](https://drive.google.com/file/d/1t-_TPyB-bFky28sUrci8jVrmXV0865e-/view)
9. Запустите её, откроется такое окно 

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%208.png)

10. Не пугайтесь открытой консоли
11. Выберите нужный COM порт и нажмите подключится
12. Всё готово. *Если возникнет ошибка, то перезагрузите робота и [перейдите к пункту 4]()*
13. Просмотр камеры выполняется через [расширение](https://drive.google.com/file/d/1ooI8_MVH6e2iUHJ6lOcwk1Qh9qAunpmQ/view?usp=sharing)

    ![1.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/1.png)

    ![2.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/2.png)

    ![3.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/3.png)

    ![4.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/4.png)

    ![5.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/5.png)

    ![6.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/6.png)

    ![7.png](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/7.png)

14. Откройте панель управления

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%209.png)

    ![Untitled](%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%201bf1c08e4d2a43d59df7ed5d30238e61/Untitled%2010.png)

15. Нажмите OK
16. Робот запущен