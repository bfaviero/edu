require 'spec_helper'

describe "Static pages" do

  subject { page }

  describs "Class page" do
    it "should have the content 'class page'" do
      visit '/static_pages/class'
      page.should_have_content('Choose your class')
    end

  describe "Home page" do
    before { visit root_path }

    it { should have_selector('h1',    text: 'Sample App') }
    it { should have_selector('title', text: full_title('')) }
    it { should_not have_selector 'title', text: '| Home' }
  end

  
end