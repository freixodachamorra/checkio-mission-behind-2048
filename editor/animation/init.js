//Dont change it
requirejs(['ext_editor_1', 'jquery_190', 'raphael_210'],
    function (ext, $, TableComponent) {

        var cur_slide = {};

        ext.set_start_game(function (this_e) {
        });

        ext.set_process_in(function (this_e, data) {
            cur_slide["in"] = data[0];
        });

        ext.set_process_out(function (this_e, data) {
            cur_slide["out"] = data[0];
        });

        ext.set_process_ext(function (this_e, data) {
            cur_slide.ext = data;
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_process_err(function (this_e, data) {
            cur_slide['error'] = data[0];
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_animate_success_slide(function (this_e, options) {
            var $h = $(this_e.setHtmlSlide('<div class="animation-success"><div></div></div>'));
            this_e.setAnimationHeight(115);
        });

        ext.set_animate_slide(function (this_e, data, options) {
            var $content = $(this_e.setHtmlSlide(ext.get_template('animation'))).find('.animation-content');
            if (!data) {
                console.log("data is undefined");
                return false;
            }

            //YOUR FUNCTION NAME
            var fname = 'move2048';

            var checkioInput = data.in;
            var checkioInputStr = fname + '(' + JSON.stringify(checkioInput[0]) + ',' + JSON.stringify(checkioInput[1]) + ')';

            var failError = function (dError) {
                $content.find('.call').html('Fail: ' + checkioInputStr);
                $content.find('.output').html(dError.replace(/\n/g, ","));

                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
                $content.find('.answer').remove();
                $content.find('.explanation').remove();
                this_e.setAnimationHeight($content.height() + 60);
            };

            if (data.error) {
                failError(data.error);
                return false;
            }

            if (data.ext && data.ext.inspector_fail) {
                failError(data.ext.inspector_result_addon);
                return false;
            }

            var rightResult = data.ext["answer"];
            var userResult = data.out;
            var result = data.ext["result"];
            var result_addon = data.ext["result_addon"];


            //if you need additional info from tests (if exists)
            var explanation = data.ext["explanation"];

            $content.find('.output').html('&nbsp;Your result:&nbsp;' + JSON.stringify(userResult));

            if (!result) {
                $content.find('.call').html('Fail: ' + checkioInputStr);
                $content.find('.answer').html('Right result:&nbsp;' + JSON.stringify(rightResult));
                $content.find('.answer').addClass('error');
                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
            }
            else {
                $content.find('.call').html('Pass: ' + checkioInputStr);
                $content.find('.answer').remove();
            }

            var canvasStart = new States2048($content.find(".explanation div")[0]);
            canvasStart.draw(checkioInput[0]);
            $content.find(".explanation div").eq(1).text({"left": "⍇", "right": "⍈", "up": "⍐", "down": "⍗"}[checkioInput[1]]);

            var canvasEnd = new States2048($content.find(".explanation div")[2]);
            canvasEnd.draw(rightResult);


            this_e.setAnimationHeight($content.height() + 60);

        });

        //This is for Tryit (but not necessary)
//        var $tryit;
//        ext.set_console_process_ret(function (this_e, ret) {
//            $tryit.find(".checkio-result").html("Result<br>" + ret);
//        });
//
//        ext.set_generate_animation_panel(function (this_e) {
//            $tryit = $(this_e.setHtmlTryIt(ext.get_template('tryit'))).find('.tryit-content');
//            $tryit.find('.bn-check').click(function (e) {
//                e.preventDefault();
//                this_e.sendToConsoleCheckiO("something");
//            });
//        });
        function States2048(dom) {
            var colorOrange4 = "#F0801A";
            var colorOrange3 = "#FA8F00";
            var colorOrange2 = "#FAA600";
            var colorOrange1 = "#FABA00";

            var colorBlue4 = "#294270";
            var colorBlue3 = "#006CA9";
            var colorBlue2 = "#65A1CF";
            var colorBlue1 = "#8FC7ED";

            var colorGrey4 = "#737370";
            var colorGrey3 = "#9D9E9E";
            var colorGrey2 = "#C5C6C6";
            var colorGrey1 = "#EBEDED";

            var colorWhite = "#FFFFFF";

            var cell = 50;

            var padding = 10;

            var edge = 5;

            var sizeX = padding * 2 + cell * 4 + edge * 5;

            var paper = Raphael(dom, sizeX, sizeX);

            var fontSizes = {
                0: cell * 0.8,
                2: cell * 0.8,
                4: cell * 0.8,
                8: cell * 0.8,
                16: cell * 0.6,
                32: cell * 0.6,
                64: cell * 0.6,
                128: cell * 0.5,
                256: cell * 0.5,
                512: cell * 0.5,
                1024: cell * 0.4,
                "U": cell * 0.8,
                "W": cell * 0.8,
                "I": cell * 0.8,
                "N": cell * 0.8,
                "G": cell * 0.8,
                "A": cell * 0.8,
                "M": cell * 0.8,
                "E": cell * 0.8,
                "O": cell * 0.8,
                "V": cell * 0.8,
                "R": cell * 0.8
            };

            this.draw = function(matrix){
                paper.rect(padding, padding, sizeX - padding * 2, sizeX - padding * 2, edge).attr({
                        "stroke-width": 2, "fill": colorBlue1, "stroke": colorBlue4});
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        paper.rect(padding + (i + 1) * edge + i * cell, padding + (j + 1) * edge + j * cell, cell, cell, edge).attr(
                            {"fill": colorBlue2, "stroke": colorBlue4, "stroke-width": 1});
                        paper.text(padding + (i + 1) * edge + (i + 0.5) * cell, padding + (j + 1) * edge + (j + 0.5) * cell, matrix[j][i]).attr(
                            {"font-family": "Roboto, Open-sans, sans", "font-size": fontSizes[matrix[j][i]], "stroke": colorBlue4}
                        );
                    }
                }
            }

        }
    }
);
