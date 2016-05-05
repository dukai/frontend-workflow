set rnu
"控制台模式下输入法无法输入部分汉字，虽然定义为cp936输入正常，但是太多插件是根据utf-8设计的，如果使用其他值会导致错误。此外cmder中的vim，中文光标位置不正确。
set encoding=utf-8
"控制台显示方式定义为cp936
"set termencoding=cp936
set termencoding=utf-8
"文件编码 无需定义
"set fileencoding=utf-8
"编码搜索次序，如果encoding为cp936，ucs-bom无效
set fileencodings=ucs-bom,utf-8,cp936
syntax on
set autoindent
set listchars=tab:>-,eol:$
set tabstop=4
set shiftwidth=4
set expandtab
set softtabstop=4
set smarttab
set hlsearch
set incsearch
set runtimepath^=~/.vim/bundle/ctrlp.vim
set runtimepath^=~/.vim/bundle/vim-airline

let g:airline_left_sep='>'
let g:airline_right_sep='<'
let g:airline_detect_modified=1
let g:airline_detect_paste=1
let g:airline_detect_crypt=1
let g:airline_detect_spell=1
let g:airline_detect_iminsert=0
let g:airline_inactive_collapse=1
let g:airline_theme='dark'
set laststatus=2
let g:airline#extensions#tabline#enabled = 1



set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'jelera/vim-javascript-syntax'
Plugin 'vim-scripts/JavaScript-Indent'
Plugin 'vim-airline/vim-airline'
Plugin 'Shougo/neocomplete.vim'
Plugin 'scrooloose/nerdtree'




" Keep Plugin commands between vundle#begin/end.

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required






let g:NERDTreeDirArrowExpandable = '='
let g:NERDTreeDirArrowCollapsible = '-'

map <F4> :NERDTreeToggle<CR>

let g:neocomplete#enable_at_startup = 1
let NERDTreeShowLineNumbers=1 
