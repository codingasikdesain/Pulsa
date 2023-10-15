   $('#nohp').on('input', function () {
      $('#nohp').change()
    })
    var nohp = []
    $('#nohp').on('change', function () {
      var no = $(this).val()
      newno = no.replace('-', '').trim()
      var cek = newno.substring(0, 3).replace('-', '').trim()
      var ceka = newno.substring(3, 16).replace('-', '').trim()
      if (cek == '+62') {
        let result = 0
        $(this).val(result + ceka)
        getNmr(result + ceka)
      } else {
        $(this).val(cek + ceka)
        getNmr(cek + ceka)
      }
    });
    function getNmr(val) {
      var id = val.substring(0, 4)
      if (id.length > 3 && nohp[0] != id) {
        nohp[0] = id
        cekNmr(nohp[0])
      } else {
        // Lakukan aksi lanjutan di sini jika form valid
      }
    }

    function cekNmr(id) {
      $('#display').removeClass('d-none')
      var reg = '', tf = '';
      if (id.length < 4) {
        $('span#addon_pulsa').html('erorr')
        $('#display').hide()
        $('#info').html("<div class='d-grid'><div class= 'container text-center' > Nomor Tidak Lengkap / Kode Operator Tidak Ditemukan.</div></div > ")
      } else {
        $('#display').show()
        $('#info').html('')
        $('#loading').html('')
        if (id == 0) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa').html('<img src="https://codingasikiconbusiness.files.wordpress.com/2023/07/byu.png" alt="">')
          reg = byu;
          tf = byutf;
        }
        else if (id == 0811 || id == 0812 || id == 0813 || id == 0821 || id == 0822 || id == 0823 || id == 0852 || id == 0853 || id == 0851) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa_name').html('Telkomsel')
          $('span#addon_pulsa').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/106083/502555766s.jpg" alt="">')
          reg = tselreg;
          tf = tseltf;
        }
        else if (id == 0814 || id == 0815 || id == 0816 || id == 0855 || id == 0856 || id == 0857 || id == 0858) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa_name').html('Indosat')
          $('span#addon_pulsa').html('<img src="https://i.ibb.co/N6KhhY1/indosat-logo-by-idiotz.png" alt="">')
          reg = isatreg;
          tf = isattf;
        }
        else if (id == 0817 || id == 0818 || id == 0819 || id == 0859 || id == 0877 || id == 0878) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa_name').html('XL Axiata')
          $('span#addon_pulsa').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/106083/841353370t.jpg" alt="">')
          reg = xlreg;
          tf = xltf;
        }
        else if (id == 0838 || id == 0831 || id == 0832 || id == 0833) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa_name').html('Axis')
          $('span#addon_pulsa').html('<img src="https://i.ibb.co/wQTDw5D/AXIS4.jpg" alt="">')
          reg = axreg;
          tf = axtf;
        }
        else if (id == 0895 || id == 0896 || id == 0897 || id == 0898 || id == 0899) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa_name').html('Tri')
          $('span#addon_pulsa').html('<img src="https://i.ibb.co/mXDnMCf/Logo-Three-3-Format-PNG.png" alt="">')
          reg = trireg;
          tf = tritf;
        }
        else if (id == 0881 || id == 0882 || id == 0883 || id == 0884 || id == 0885 || id == 0886 || id == 0887 || id == 0888 || id == 0889) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa_name').html('Smartfren')
          $('span#addon_pulsa').html('<img src="https://i.ibb.co/2NzWqYv/Smartfren-Logo.png" alt="">')
          reg = smartreg;
          tf = smarttf;
        }
        else {
          $('span#addon_pulsa').html('<i class="fas fa-do-not-enter" style="color:red;"></i>')
          $('#display').hide()
          $('#data').html('')
          // Gambar Jiraya - Petapa Genit Suka Ke OYO
          $('#info').html("<div class='d-grid'><div class= 'container text-center' ><img src='https://static.vecteezy.com/system/resources/previews/020/696/259/original/3d-minimal-red-wrong-mark-cancel-icon-rejected-disapproved-no-false-not-ok-wrong-choices-cartoon-hand-with-a-red-cross-symbol-3d-illustration-png.png'style='width:50%;margin-top:10%;margin-bottom:15px'><p>Ops!!! Nomor Tujuan Salah / Tidak Lengkap</p></div></div > ")
        }
      }
      $('#reg').off('click')
      $('#tf').off('click')
      $('#reg').on('click', function () {
        getData(reg)
      })
      $('#tf').on('click', function () {
        getData(tf)
      })
      $('#masaaktif').on('click', function () {
        getData(masaaktif)
      })
      getData(reg)
    }
    function getData(kategori) {
      var no = $('#nohp').val()
      var link = mylink
      $.ajax({
        type: "POST",
        url: "https://api-otomatis.my.id/api/products/basic",
        data: {
          api: api_key,
          nama: username,
          main: '',
          kategori: kategori
        },
        dataType: "JSON",
        beforeSend: function () {
          $('#modalDetail').html('')
          $('#data').html('')
          for (let i = 0; i < 1; i++)
            // Gambar Naruto Lari
            $('#fake').append('<div class="coloading"><div class="loader"></div> </div>')
        },
        success: function (response) {
          $('#loading').html('')
          $('#fake').html('')
          if (response.statusCode === 200) {
            if (response.data.length !== 0) {
              $.each(response.data, function (i, v) {
                $('#data').append('<div class="codingasik"><button class="btn btn-light codingasik-produk bg-white border w-100 mb-2" id="btn-link" onclick="getDetail(\'' + v.links + '\')"><div class="d-flex ca-flex"><div><img class="d-block img-produk" src="' + v.img + '"></div><div class="w-100"> <p id="prod-name" class="text-start name m-0" style="font-size:14px;">' + v.names + '</p><div class="d-flex"> <div class="w-100 text-start"><p class="harga-item">' + v.prices + '</p></div><div class="w-100 text-diskon text-end"><p class="m-0" id="d' + i + '"> <span class="text-decoration-line-through fw-bold" style="font-size:10px;" >' + v.price_old + '</span> <span class="bg-danger text-white p-1 rounded" style="font-size:10px;"> -' + v.discount + ' OFF</span>  </p> </div></div></button>')
                let discount = jQuery.isEmptyObject(v.discount) ? $(`#d${i}`).addClass('d-none') : v.discount;
              });
            } else {
              $('#data').html("<div class='d-grid'><div class= 'container text-center' > Produk Tidak memiliki Stok atau Sedang Gangguan</div > ")
            }
          } else if (response.statusCode === 400) {
            $('#data').html("<div class='d-grid'><div class= 'container text-center' >" + response.data + "</div></div > ")
          }
        },
        error: function () {
        }
      });
      $(document).on('click', ".submit-form", function () {
        var no = $('#nohp').val()
        $('#link-extra-info input').val(no);
        $('#link-extra-info').attr('action', $(this).attr('href'));
        $('#link-extra-info').submit();
        return false;
      });
    }
    function getDetail(produk) {
      var no = $('#nohp').val()
      if (no == '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Tujuan Tidak Boleh Kosong!',
        })
      } else {
        $("#linkBeli").attr("href", "#");
        $.ajax({
          type: "POST",
          url: "https://api-otomatis.my.id/api/products/detail",
          data: {
            produk: produk,
            api: api_key,
            nama: username,
          },
          dataType: "JSON",
          beforeSend: function () {
            $('#nama_produk').text('Loading...')
            $('#no_tujuan').text('Loading...')
            $('#harga').text('Loading...')
            $('#harga2').text('Loading...')
            $('#short-desc').text('Loading...')
            $('#full-desc').text('Loading...')
            $("#linkBeli").attr("href", "" + mylink + produk);
            $('#mask').removeClass('d-none')
            $('#modalTrx').modal('show')
            $('#no_tujuan').text(no)
          },
          success: function (result) {
            let response = result.data
            $('#nama_produk').text(response.name)
            $('#harga').text(response.price)
            $('#harga2').text(response.price)
            $('#short-desc').text(response.desc)
            $('#full-text').text(response.full_text)
            $('#full-bold').text(response.full_bolds)
            $('#full-desc').text(response.full)
            let text = response.full
            let formated = text.replace(/\|/g, '<br/>- ')
            $('#full-desc').append(formated)
            $('#mask').addClass('d-none')
          },
          error: function () {
          }
        });
      }
    }
